# Barcelona. Ciutat de Dones - Interactive Map

## Project Overview

The "Barcelona. Ciutat de Dones" project aims to highlight the extraordinary contributions of numerous women who have left their mark on our city and society through various fields. This interactive map serves as a visual and educational tool, enabling users to explore the network of influential figures and learn more about their stories.

## Features

- **Interactive Map**: Clickable nodes representing individual women with contributions to Barcelona's heritage.
- **Search Functionality**: Users can search for specific names or filter by categories.
- **Accessibility Focused**: Implementing best practices to ensure the map is accessible to all users.

## Technologies Used

- [ReactJS](https://reactjs.org): For building the user interface.
- [Vite](https://vitejs.dev): As a build tool for blazing fast development experience.
- [Chakra UI](https://chakra-ui.com): For a modular and accessible component library.
- \+ other smaller dependencies

## Getting Started

To get a local copy up and running, follow these simple steps.

1. Create the project.

   ```bash
   npx degit The24thDS/vite-reactts18-chakra-jest-husky my-app
   ```

2. Access the project directory.

   ```bash
   cd my-app
   ```

3. Initialize a git repository.

   ```bash
   git init
   ```

4. Install dependencies.

   ```bash
   pnpm
   ```

5. Serve with hot reload at http://localhost:5173.
   ```bash
   pnpm dev
   ```

## Recommended VS Code extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)

## Other commands

### Lint commands

- Run eslint
  ```bash
  pnpm lint
  ```
- Run eslint with fixing
  ```bash
  pnpm lint:fix
  ```

### Build commands

```bash
pnpm build
```

### Test commands

- Run tests with coverage (will open the coverage if all tests succeed)
  ```bash
  pnpm test
  ```
- Watch tests
  ```bash
  pnpm test:watch
  ```

### Commit commands

This project use [commitlint](https://github.com/conventional-changelog/commitlint) to ensure that commit messages are [conventional-changelog](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional) compliants.

To help you build more efficient commit messages, you can use the [commitizen](https://github.com/commitizen/cz-cli) package by running this command :

```bash
pnpm cz
```

## License

This project is licensed under the MIT License.
