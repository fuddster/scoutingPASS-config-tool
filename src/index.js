/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

// import * as Blockly from 'blockly';
import {blocks} from './scouting_blocks';
import {jsonGenerator} from './scouting_generators';
import {save, load} from './serialization';
import {toolbox} from './toolbox';
import './index.css';
import {ContinuousToolbox,ContinuousFlyout,ContinuousMetrics} from '@blockly/continuous-toolbox';
import DarkTheme from '@blockly/theme-dark';
import * as Blockly from 'blockly';
Blockly.common.defineBlocks(blocks);

    
// Register the blocks with Blockly
Blockly.common.defineBlocks(blocks);

// Set up UI elements and inject Blockly
const codeDiv = document.getElementById('generatedCode').firstChild;
const blocklyDiv = document.getElementById('blocklyDiv');
const ws = Blockly.inject(blocklyDiv, {
  plugins: {
    toolbox: ContinuousToolbox,
    flyoutsVerticalToolbox: ContinuousFlyout,
    metricsManager: ContinuousMetrics,
  },
  toolbox,
  maxInstances: {
  'json_start': 1  // Apply the instance limit in the workspace configuration
    },
  comments : false,
  theme: DarkTheme,
  move:{
    scrollbars: {
      horizontal: false,
      vertical: false
    },
    drag: false,
    wheel: false}

  });

// This function resets the code div and shows the
// generated code from the workspace.
const runCode = () => {
  const code = jsonGenerator.workspaceToCode(ws);
  codeDiv.innerText = '[\n'+code+'\n]';
};

// Load the initial state from storage and run the code.

load(ws);
runCode();

// Every time the workspace changes state, save the changes to storage.
ws.addChangeListener((e) => {
  // UI events are things like scrolling, zooming, etc.
  // No need to save after one of these.
  if (e.isUiEvent) return;
  save(ws);
});

// Whenever the workspace changes meaningfully, run the code again.
ws.addChangeListener((e) => {
  // Don't run the code when the workspace finishes loading; we're
  // already running it once when the application starts.
  // Don't run the code during drags; we might have invalid state.
  if (
    e.isUiEvent ||
    e.type == Blockly.Events.FINISHED_LOADING ||
    ws.isDragging()
  ) {
    return;
  }
  runCode();
});
