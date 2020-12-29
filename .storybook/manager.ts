import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const theme = create({
    base: 'light',
    brandTitle: 'ScaleReal Components',
    fontCode: 'monospace',
    fontBase: '"Open Sans", sans-serif'
});

addons.setConfig({
    panelPosition: 'bottom',
    theme,
});