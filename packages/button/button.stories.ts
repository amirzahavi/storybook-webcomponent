import { html } from "lit-element";
import { boolean, number, color } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import './lib/button';

const onClick = action('clicked');

export default {
  title: 'Button',
  parameters: {
    chromatic: { delay: 3000 },
  }
}

export const Default = () => html`
<style>
  trax-button {
  --background-idle: ${color('Background Color', '#7a48a3')};
  --border-idle: ${color('Border Color', '#7a48a3')};
  --text-idle:${color('Text Color', '#fff')};
  --font-size: ${number('Font Size', 13, {min: 9, step: 3, max: 64})}px;
  }
</style>
<trax-button
  @click="${onClick}"
  ?disabled="${boolean('Disabled', false)}"
  ?secondary="${boolean('Secondary', false)}"
  ?link="${boolean('Link', false)}">default</trax-button>
`;

export const Disabled = () => html`
<style>
  trax-button {
  --background-idle: ${color('Background Color', '#d4c1e6')};
  --border-idle: ${color('Border Color', '#d4c1e6')};
  --text-idle:${color('Text Color', '#fffff')};
  --font-size: ${number('Font Size', 13, {min: 9, step: 3, max: 64})}px;
  }
</style>
<trax-button
  @click="${onClick}"
  ?disabled="${boolean('Disabled', true)}"
  ?secondary="${boolean('Secondary', false)}"
  ?link="${boolean('Link', false)}">disabled</trax-button>
`;


export const withSlot = () => html`
<style>
  trax-button {
  --background-idle: ${color('Background Color', '#7a48a3')};
  --border-idle: ${color('Border Color', '#7a48a3')};
  --text-idle:${color('Text Color', '#fffff')};
  --font-size: ${number('Font Size', 13, {min: 9, step: 3, max: 64})}px;
  }

  .child {
    background-color: white;
  }
</style>
<trax-button
  @click="${onClick}"
  ?disabled="${boolean('Disabled', false)}"
  ?secondary="${boolean('Secondary', false)}"
  ?link="${boolean('Link', false)}">
    <div class="child">with slot</div>
  </trax-button>
`;
