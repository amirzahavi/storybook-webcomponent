import { create } from '@storybook/theming/create';

const colorPrimary = '#7e52a2';
const colorSecondary = '#f5a623';


export const Light = create({
  base: 'light',

  colorPrimary,
  colorSecondary,

  // UI
  // appBg: 'white',
  // appContentBg: 'silver',
  // appBorderColor: 'grey',
  // appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  // textColor: 'black',
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
   barTextColor: 'white',
  //barSelectedColor: 'white',
  barBg: colorPrimary,

  // Form colors
  // inputBg: 'white',
  // inputBorder: 'silver',
  // inputTextColor: 'black',
  // inputBorderRadius: 4,

  brandTitle: 'Trax Web Components',
  brandUrl: 'https://traxretail.com/',
  brandImage: 'https://traxretail.com/wp-content/themes/trax/assets/img/logo-503bff815e.svg',
});

export const Dark = create({
  base: 'dark',

  colorPrimary,
  colorSecondary,

  // UI
  // appBg: 'white',
  // appContentBg: 'silver',
  // appBorderColor: 'grey',
  // appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  // textColor: 'black',
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
   barTextColor: 'white',
  //barSelectedColor: 'white',
  barBg: colorPrimary,

  // Form colors
  // inputBg: 'white',
  // inputBorder: 'silver',
  // inputTextColor: 'black',
  // inputBorderRadius: 4,

  brandTitle: 'Trax Web Components',
  brandUrl: 'https://traxretail.com/',
  brandImage: 'https://traxretail.com/wp-content/themes/trax/assets/img/logo-503bff815e.svg',
});
