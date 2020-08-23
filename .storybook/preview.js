import {
  configure,
  addParameters,
  addDecorator
} from '@storybook/web-components';

import { withKnobs } from "@storybook/addon-knobs";
import addons from "@storybook/addons";
import {center} from "../decorators/center";
import { Light, Dark } from "./trax.theme";

const channel = addons.getChannel();
channel.on('DARK_MODE', isDarkMode => {
  console.log(isDarkMode ? 'dark mode on': 'dark mode off');  
});

addParameters({
  options: {
    theme: Light
  },
  docs: {
    iframeHeight: '200px',
  },
  darkMode: {
    dark: Dark,
    light: Light
  }
});

addDecorator(center);
addDecorator(withKnobs);

// force full reload to not reregister web components
const req = require.context('../packages', true, /\.stories\.ts$/);
configure(req, module);
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
