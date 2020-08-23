import { addons } from '@storybook/addons';
import { PANEL_ID } from "@storybook/addon-notes/dist/shared";

addons.setConfig({
  panelPosition: 'right',
  selectedPanel: PANEL_ID
});
