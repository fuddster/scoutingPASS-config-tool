/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview All the custom JSON-related blocks defined in the custom
 * generator codelab.
 */

import * as Blockly from 'blockly';
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  {
    type: "json_start",
    message0: "Start Form %1  %2 End Form",
    args0: [
      {
        type: 'input_dummy',
      },
      {
        type: 'input_statement',
        name: 'JSON',
      },
    ],
    inputsInline: false,
    output: null,
    colour: 120,
    tooltip: "",
    helpUrl: "",
    // maxInstances: 1
  },

  {
    type: 'spacer',
    message0: '%1',
    args0: [
      {
        type: 'field_label',
        name: 'SPACER',
        text: 'Create Spacer',
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
  },

  {
    type: 'large_header',
    message0: 'Large header with text: %1 and key: %2',
    args0: [
      {
        type: 'field_input',
        name: 'NAME',
        text: '',
      },
      {
        type: 'field_input',
        name: 'KEY',
        text: '',
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
  },
  {
    type: 'small_header',
    message0: 'Small header with text: %1 and key: %2',
    args0: [
      {
        type: 'field_input',
        name: 'NAME',
        text: '',
      },
      {
        type: 'field_input',
        name: 'KEY',
        text: '',
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
  },

  {
    type: 'bool',
    message0: 'Boolean with text: %1 and key: %2',
    args0: [
      {
        type: 'field_input',
        name: 'NAME',
        text: '',
      },
      {
        type: 'field_input',
        name: 'KEY',
        text: '',
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 180,
  },
  {
    type: 'checkbox',
    message0: 'Checkbox with text: %1 and key: %2',
    args0: [
      {
        type: 'field_input',
        name: 'NAME',
        text: '',
      },
      {
        type: 'field_input',
        name: 'KEY',
        text: '',
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 180,
  },
  {
    type: 'counter',
    message0: 'Counter with text: %1 and key: %2\n Allow Negative? %3',
    args0: [
      {
        type: 'field_input',
        name: 'NAME',
        text: '',
      },
      {
        type: 'field_input',
        name: 'KEY',
        text: '',
      },
      {
        "type": "field_checkbox",
        "name": "NEGATIVE",
        "checked": false
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 275,
  },
  {
    type: 'textblock',
    message0: 'Text block with text: %1 and key: %2',
    args0: [
      {
        type: 'field_input',
        name: 'NAME',
        text: '',
      },
      {
        type: 'field_input',
        name: 'KEY',
        text: '',
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 300,
  },

  {
    type: 'slider',
    message0: 'Slider with text: %1 and key: %2\n MIN: %3\n MAX: %4\n STEP: %5',
    args0: [
      {
        type: 'field_input',
        name: 'NAME',
        text: '',
      },
      {
        type: 'field_input',
        name: 'KEY',
        text: '',
      },
      {
        type: 'field_number',
        name: 'MIN',
      },
      {
        type: 'field_number',
        name: 'MAX',
      },
      {
        type: 'field_number',
        name: 'STEP',
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 75,
  },
  {
    type: 'timeslider',
    message0: 'Time slider with text: %1 and key: %2\n MIN: %3\n MAX: %4\n STEP: %5',
    args0: [
      {
        type: 'field_input',
        name: 'NAME',
        text: '',
      },
      {
        type: 'field_input',
        name: 'KEY',
        text: '',
      },
      {
        type: 'field_number',
        name: 'MIN',
      },
      {
        type: 'field_number',
        name: 'MAX',
      },
      {
        type: 'field_number',
        name: 'STEP',
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 75,
  },
]);
