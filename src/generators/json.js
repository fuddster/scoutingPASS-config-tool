/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview The full custom JSON generator built during the custom
 * generator codelab.
 */

import keyGen from'../utils/keyGen'
import * as Blockly from 'blockly';
export const jsonGenerator = new Blockly.Generator('JSON');

const Order = {
  ATOMIC: 0,
};

jsonGenerator.scrub_ = function (block, code, thisOnly) {
  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  if (nextBlock && !thisOnly) {
    return code + ',\n' + jsonGenerator.blockToCode(nextBlock);
  }
  return code;
};

jsonGenerator.forBlock['json_start'] = function (block, generator) {
  const value = generator.statementToCode(block, 'JSON');
  const code = '[\n' + value + '\n]';
  return [code, Order.ATOMIC];
};


jsonGenerator.forBlock['spacer'] = function (block, generator) {
  const code = `{\n"type": "spacer"\n}`;
  return code;
};

jsonGenerator.forBlock['large_header'] = function (block, generator) {
  const text = block.getFieldValue('NAME');
  const key = block.getFieldValue('KEY');
  const code = `{\n"type": "h2",\n"label": "${text}",\n"id": "${keyGen(key)}"\n}`;
  return code;
};
jsonGenerator.forBlock['small_header'] = function (block, generator) {
  const text = block.getFieldValue('NAME');
  const key = block.getFieldValue('KEY');
  const code = `{\n"type": "h3",\n"label": "${text}",\n"id": "${keyGen(key)}"\n}`;
  return code;
};
jsonGenerator.forBlock['bool'] = function (block, generator) {
  const text = block.getFieldValue('NAME');
  const key = block.getFieldValue('KEY');
  const code = `{\n"type": "bool",\n"label": "${text}",\n"id": "${keyGen(key)}"\n}`;
  return code;
};
jsonGenerator.forBlock['checkbox'] = function (block, generator) {
  const text = block.getFieldValue('NAME');
  const key = block.getFieldValue('KEY');
  const code = `{\n"type": "checkbox",\n"label": "${text}",\n"id": "${keyGen(key)}"\n}`;
  return code;
};
jsonGenerator.forBlock['counter'] = function (block, generator) {
  const text = block.getFieldValue('NAME');
  const key = block.getFieldValue('KEY');
  const negative = (block.getFieldValue('NEGATIVE')=='FALSE')
  const type = (negative)? 'counter':'counterallownegative';
  const code = `{\n"type": "${type}",\n"label": "${text}",\n"id": "${keyGen(key)}"\n}`;
  return code;
};

jsonGenerator.forBlock['textblock'] = function (block, generator) {
  const text = block.getFieldValue('NAME');
  const key = block.getFieldValue('KEY');
  const code = `{\n"type": "textblock",\n"label": "${text}",\n"id": "${keyGen(key)}"\n}`;
  return code;
};

jsonGenerator.forBlock['slider'] = function (block, generator) {
  const text = block.getFieldValue('NAME');
  const key = block.getFieldValue('KEY');
  const min = block.getFieldValue('MIN');
  const max = block.getFieldValue('MAX');
  const step = block.getFieldValue('STEP')
  const code = `{\n"type": "slider",\n"label": "${text}",\n"id": "${keyGen(key)}",\n"options": {\n"min": ${min},\n"max": ${max},\n"step": ${step}\n}\n}`
  return code;
};

jsonGenerator.forBlock['timeslider'] = function (block, generator) {
  const text = block.getFieldValue('NAME');
  const key = block.getFieldValue('KEY');
  const min = block.getFieldValue('MIN');
  const max = block.getFieldValue('MAX');
  const step = block.getFieldValue('STEP')
  const code = `{\n"type": "timeslider",\n"label": "${text}",\n"id": "${keyGen(key)}",\n"options": {\n"min": ${min},\n"max": ${max},\n"step": ${step}\n}\n}`
  return code;
};