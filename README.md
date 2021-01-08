# ScaleReal React Component Library

### [Still in progess not yet deployed]

Themable react components with various configuration to match your need. You can checkout the storybook of the components [here](https://scalereal.github.io/react-component-library/?path=/story/introduction--page).

## Table of Contents

-   🚀[Getting Started](#getting-started)
-   📦[Packages](#packages)
    -   🧩 [Core](#core)
    -   ℹ [Icons](#icons)
    -   🌀 [Loaders](#loaders)
    -   ⧉ [Layout](#layout)
    -   📝 [Forms](#forms)
    -   🏞 [Theme](#theme)
    -   🛠 [Utils](#utils)
-   📜[Built With](#built-with)
-   📝[Npm Scripts](#npm-scripts)

## Getting Started

```properties
npx create-react-app react-components-demo --template typescript
cd react-components-demo
yarn add styled-components @types/styled-components
yarn add @scaleReal-components/theme @scaleReal-components/utils @scaleReal-components/icons @scaleReal-components/core @scaleReal-components/layout @scaleReal-components/loaders @scaleReal-components/forms
```

Replace content of `index.tsx` with the following:

```tsx
import { defaultTheme } from '@scaleReal-components/theme';
import { CssBaseline } from '@scaleReal-components/core';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);
```

Replace content in `App.tsx` with the following:

```tsx
import React from 'react';
import { Button } from '@scaleReal-components/core';

const App: React.FC = () => <Button variant="solid">Click me!</Button>;

export default App;
```

If you are using any static property of any component like `Modal.Header`, you have to add `"strictNullChecks": false` in your `tsconfig.json` file.

## Packages

Library consists of five packages:

### [Core](https://github.com/scalereal/react-component-library/tree/main/packages/core)

Core package consists of components almost all basic react components like Avatar, Button, Input, List, Modal etc.

### [Icons](https://github.com/scalereal/react-component-library/tree/main/packages/icons)

Icons package consists of most commonly used svg icons exposed as react components.

### [Loaders](https://github.com/scalereal/react-component-library/tree/main/packages/loaders)

Few simple svg loaders exposed as react components.

### [Layout](https://github.com/scalereal/react-component-library/tree/main/packages/layout)

Layout package consists of components that help in creating a page layout using side panels and nav items, which are exposed as react components.

### [Forms](https://github.com/scalereal/react-component-library/tree/main/packages/forms)

Using this package you can create dynamic form using simple json

### [Theme](https://github.com/medly/medly-components/tree/master/packages/theme)

Themes lets you define how a component should be styled across website. This can be done individually for particular type of components, eg all icons should be solid or can be done for the whole website, like color theme for all type of components across website should be orange.

### [Utils](https://github.com/scalereal/react-component-library/tree/main/packages/utils)

Utils package consists of most commonly used functionalities or components.

## Built With

🔥 [react](https://github.com/facebook/react)

💅 [styled-components](https://www.styled-components.com)

⛑ [typescript](https://www.typescriptlang.org/)

📚 [storybook](https://storybook.js.org/)

💥 [babel](https://babeljs.io/)

🐐 [react-testing-library](https://github.com/kentcdodds/react-testing-library)

## npm scripts

-   `yarn build` to build components
-   `yarn commit` to commit with conventional-commit approach
-   `yarn lint:css` to run the css lint
-   `yarn lint:ts` to run the ts lint
-   `yarn lint` to run both css & ts lint
-   `yarn test` to run tests and type check
-   `yarn test:update` to update snapshots
-   `yarn test:watch` to watch tests
-   `yarn type-check` to run tsc to check types
-   `yarn test:jest` to run test only
-   `yarn storybook` to run storybook for live reloading your components
-   `yarn release` to publish the latest version to npm

Page Saving
Add Tag
You are not Logged-In

Please Login
