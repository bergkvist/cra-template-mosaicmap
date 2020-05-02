# cra-template-mosaicmap

### Creates a React app with the following features:

- Fast Refresh through `react-app-rewired` and `customize-cra-react-refresh`

- `react-context-toolkit` for managing state (by Tobias Bergkvist)

- `react-mosaic-component` for window layout

- `deck.gl` and `react-map-gl` for visualizing large data sets on a map

## Usage

### Installation

```sh
# Using npx
npx create-react-app <project-name> --template=mosaicmap

# Using yarn create
yarn create react-app <project-name> --template=mosaicmap
```

### Development

```sh
# Start the dev environment (with React Refresh)
yarn start

# Build (for production usage)
yarn build

# The commands below requires that you have Docker installed:
# Docker build (after build)
yarn docker-build

# Docker-run (after docker-build)
yarn docker-run
```
