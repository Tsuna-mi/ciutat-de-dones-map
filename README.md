# Barcelona. Ciutat de Dones - Interactive Map 🗺️

## Project Overview 🌟

The "Barcelona. Ciutat de Dones" project is part of a Final Year Project (TFG) that aims to highlight the extraordinary contributions of numerous women who have left their mark on Barcelona and society. This interactive map is a visual and educational tool, allowing users to explore the influential figures and learn more about their stories.

## Features 🛠️

- **Interactive Map**: Clickable nodes representing individual women who have contributed to Barcelona's heritage.
- **Search Functionality**: Users can search for specific names or filter by categories.
- **Accessibility Focused**: Implementing best practices to ensure the map is accessible to all users.

## Technologies Used 💻

- [ReactJS](https://reactjs.org) for building the user interface.
- [Vite](https://vitejs.dev) as a build tool for a blazing fast development experience.
- [Chakra UI](https://chakra-ui.com) for a modular and accessible component library.
- Plus, other smaller dependencies listed in `package.json`.

## Getting Started 🚀

To get a local copy up and running, follow these simple steps:

1. Clone the repo
   ```sh
   git clone https://github.com/Tsuna-mi/ciutat-de-dones-map.git
   ```

2. Install NPM packages.

   ```sh
   pnpm install
   ```

3. Start the server to serve the api.

   ```sh
   pnpm run serve:api
   ```

4. Serve with hot reload at http://localhost:5173.
   ```bash
   pnpm dev
   ```

## Recommended VS Code extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)

## Available Scripts 📜
In the project directory, you can run:

- `pnpm run dev`: Runs the app in the development mode.
- `pnpm run build`: Builds the app for production.
- `pnpm run serve`: Preview the production build.
- `pnpm run serve:api`: Runs the JSON server for the API.
- `pnpm run lint`: Lints and formats your code.
- `pnpm run format`: Formats your code using Prettier.
- `pnpm run prepare`: Prepares husky for commit hooks.
- `pnpm run cz`: Runs commitizen for commit conventions.


## Commit commands

This project use [commitlint](https://github.com/conventional-changelog/commitlint) to ensure that commit messages are [conventional-changelog](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional) compliants.

To help you build more efficient commit messages, you can use the [commitizen](https://github.com/commitizen/cz-cli) package by running this command :

```bash
pnpm cz
```

## Deployment 🌐

This project has been deployed using Netlify and is accessible at [https://ciutat-de-dones.netlify.app](https://ciutat-de-dones.netlify.app).

Happy Exploring! 🎉

## License

This project is licensed under the MIT License.
