import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addDecorator, addParameters } from '@storybook/react';

addParameters({
    viewport: {
        viewports: {
            desktop: {
                name: 'Desktop',
                styles: {
                    width: '1440px',
                    height: '100%'
                }
            },
            smallLaptop: {
                name: 'Small Laptop',
                styles: {
                    width: '1280px',
                    height: '100%'
                }
            },
            tabletLandscape: {
                name: 'Tablet Landscape',
                styles: {
                    width: '1024px',
                    height: '100%'
                }
            },
            tabletPortrait: {
                name: 'Tablet Portrait',
                styles: {
                    width: '768px',
                    height: '100%'
                }
            },
            ...INITIAL_VIEWPORTS
        }
    }
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
