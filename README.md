
# Dash
> Vue web application for sharable dashboard.

## Features
 - [VueJS](https://https://vuejs.org/) 
 - [Vuex](https://vuex.vuejs.org/guide/)
 - [vue-Router](https://router.vuejs.org/installation.html#direct-download-cdn)
 - [vue-grid-layout](https://jbaysolutions.github.io/vue-grid-layout/guide/properties.html#gridlayout) For drag & drop & resizable component.
 - [ElementUI](https://element.eleme.cn/#/en-US/component/quickstart) Basic UI 
 - [Echarts](https://echarts.apache.org/examples/en/index.html) Data visualization tool. See ***[CDN](#cdn)*** below.

## Getting started
1. Install the latest [Node.js & NPM](https://nodejs.org).
2. Install yarn globally `npm i -g yarn` (Recommended).
3. Run `yarn` or `npm i` in project root directory to install dependencies.
4. Run `yarn serve` or `npm run serve`. See ***[Scripts](#scripts)*** below.

## Scripts

| Command           | Description                                                                               |
| :---------------- | :---------------------------------------------------------------------------------------- |
| `yarn serve`      | Compile app and serve content ([http://localhost:8989](http://localhost:8989) by default) |
| `yarn build`      | Build app for production                                                                  |
| `yarn analyse`    | Analyse compiled app and serve visual diagram of module bundles                           |
| `yarn lint`       | Lint files in `src` with `ESLint` and log errors/warnings                                 |
| `yarn test:e2e`   | Run end-to-end tests                                                                      |
| `yarn test:unit`  | Run the unit tests                                                                  |



## Environment
A few environment variables can be controlled by `.env` file in the root directory.

Current app accepts the following vars:

| Name                  | Default       | Description                                                                                                 |
| :-------------------- | :------------ | :---------------------------------------------------------------------------------------------------------- |
| `VUE_APP_API_URL`     | `None`        | Set up this to hit real endpoints               |
| `VUE_APP_URL_FOR_GITHUB`      | `None`        | `window.location.origin` cannot catch up real url in github.io, so we have to feed in `/${github_repo_name}` to make it works      |

## CDN

Some packages taking a lot of resources(even by dynamic import), so we are using cdn to solve this problem.

| Name           | url                                                                               |
| :--------------| :-------------------------------------------------------------------------------- |
| `echarts`      | https://cdn.bootcdn.net/ajax/libs/echarts/5.1.2/echarts.common.js                 |


## TODO
:heavy_check_mark: ~~Project list for dashboards in home page~~  
:heavy_check_mark: ~~Project & charts create/edit/remove~~  
:heavy_check_mark: ~~Pre-defined few widgets for user to select (echarts)~~  
:heavy_check_mark: ~~Customize the layout for dashboard by adjusting the size/position of the widget~~  
:heavy_check_mark: ~~Share the dashboard with url~~  
:heavy_check_mark: ~~Share the dashboard with project name~~  
:heavy_check_mark: ~~Both of project id and name must be unique, since share function based on these~~  
:heavy_check_mark: ~~Fake api hitting functions to make the loading state~~  
:heavy_check_mark: ~~Drop down project list on the top bar~~  
:heavy_check_mark: ~~State management, like loading/creating/editing~~  

:heavy_minus_sign: Tools on project page like Save/Theme Switch/Preview  
:heavy_minus_sign: Multi-language support  
:heavy_minus_sign: More sharable css variables for theme  
:heavy_minus_sign: Admin tool on the top bar  
:heavy_minus_sign: Auth & user role system  

##### Long Term
:heavy_minus_sign: More state management to make UX better  
:heavy_minus_sign: Performance optimization  
:heavy_minus_sign: Mock.js to overwrite the setTimeout...  
:heavy_minus_sign: Real-time charts update for charts (Depend on requirements)  
:heavy_minus_sign: Github CI/CD (Host by other cloud platform through docker if possible)  
:heavy_minus_sign: Unit and e2e tests  
:heavy_minus_sign: REFACTOR  

:x: Mobile friendly  


