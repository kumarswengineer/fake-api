# pre requisites
Install latest stable node version - node 16


# install 
- clone this repo
- run `npm install` at root
- run `npm start` at root to start the mock API server
- in chrome browse `https://localhost/test-api/GetAllergies` to see the sample output.

# contribution 
- create a module folder in `src`
- inside module folder create a `index.js`
- use `module.exports` to export the module mock API's
- this method will get the default params `app, appRoot` for adding the mock API def's
- attach all the mock methods by chaining to `app` and add end point definitions
- use a `mocks` folder to organize sample responses and import them to send the response 
- Import Module in index.js under src folder and add it into m/w array list for consideration
- This mock API is developed with the help of `webpack-dev-server` which is built in-built with `express-js` capabilities.
- Configure `apiRoot` and `appPort` to run with the actual values from `package.json`
- final endpoints look like `https://localhost:{appPort}/{apiRoot}/{endpoint}`
- Enable/disable `https` from package.json
