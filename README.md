# rick-morty-character-search

A simple Rick and Morty character search powered by the [Rick and Morty API](https://rickandmortyapi.com/), and built using my [react-app-scaffolding](https://github.com/malechite/react-app-scaffolding) repository as a starting point.

## Development Setup

1. First clone the repository: `git@github.com:malechite/rick-morty-character-search.git`
2. Change directories: `cd rick-morty-character-search`
3. Install Dependencies: `yarn install`
4. Start the API server: `yarn api`
5. In another terminal window, start the dev server: `yarn start`
6. [http://localhost:8080/](http://localhost:8080/) should automatically in your browser

Note: During development, we run the webpack dev server using `yarn start` for hot reloading, and the API is running separately through Express. For production you would just run `yarn prod` which runs a build, and then Express serves the production files from the `dist` folder, as well as the API.

## Building

To build rick-morty-character-search run `yarn build` - This will empty the `/dist` folder and webpack will build new artifacts.
