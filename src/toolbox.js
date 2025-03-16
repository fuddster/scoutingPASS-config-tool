/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

export const toolbox = {
  kind: 'categoryToolbox',
  contents: [
    // {
    //   kind: 'category',
    //   name: 'Start',
    //   colour: 120,
    //   contents: [
    //     {
    //       kind: 'block',
    //       type: 'json_start',
    //     },
    //   ],
    // },
    {
      kind: 'category',
      name: 'Headers & Spacer',
      categorystyle: 'math_category',
      contents: [
        {
          kind: 'block',
          type: 'spacer',
        },
        {
          kind: 'block',
          type: 'large_header',
        },
        {
          kind: 'block',
          type: 'small_header',
        },
      ],
    },
    {
      kind: 'category',
      name: 'Boolean',
      colour: 180,
      contents: [
        {
          kind: 'block',
          type: 'bool',
        },
      ],
    },

    {
      kind: 'category',
      name: 'CheckBox',
      colour: 180,
      contents: [
        {
          kind: 'block',
          type: 'checkbox',
        },
      ],
    },
    {
      kind: 'category',
      name: 'Counter',
      colour: 275,
      contents: [
        {
          kind: 'block',
          type: 'counter',
        },
      ],
    },
    {
      kind: 'category',
      name: 'Text',
      colour: 300,
      contents: [
        {
          kind: 'block',
          type: 'textblock',
        },
      ],
    },
    {
      kind: 'category',
      name: 'Sliders',
      colour: 50,
      contents: [
        {
          kind: 'block',
          type: 'slider',
        },
        {
          kind: 'block',
          type: 'timeslider',
        },
      ],
    },
  ],
};
