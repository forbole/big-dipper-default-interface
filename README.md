# Big Dipper :sparkles:
Block Explorer Interface for Cosmos

Currently a WIP please check back later for updates and launch

## Quick start for pre-release
Clone this repo
```
git clone https://github.com/forbole/big-dipper-default-interface.git
npm i
npm run dev
```

## Update local packages to repo [Testing] (pre-release)
The following steps assume you updated pre-release versions of [big-dipper-internal-ui](https://github.com/forbole/big-dipper-internal-ui) or [big-dipper-default-ui](https://github.com/forbole/big-dipper-default-ui) during and want to test the interrogation

<!-- ```
git clone https://github.com/forbole/big-dipper-internal-ui.git
git clone https://github.com/forbole/big-dipper-default-ui.git
``` -->

Link local packages using [**yalc**](https://github.com/whitecolor/yalc)
```
npm i yalc -g
```

run yalc publish in `big-dipper-default-ui` and/or `big-dipper-internal-ui`
```
yalc publish
```

Run the following(s) to update
```
yalc add big-dipper-default-ui
yalc add big-dipper-internal-ui
```

Any changes made to the local packages need to be published and added again.




##  Available scripts
In the project directory, you can run:
### `npm start`
Runs the server in production mode pointing to the build in the `dist` folder.
### `npm run build`
Builds the project for production with the server being exported in to the `dist` folder.
### `npm run dev`
Runs the server in development mode on `http://localhost:3080/`.
### `npm run lint`
Lint check and fix
### `npm run test`
Runs tests using jest
</div>
