# Angular Mastery Workshop

by [@tomastrajan](https://twitter.com/tomastrajan) and [@kreuzercode](https://twitter.com/kreuzercode)

# Welcome to exercise - Angular CLI

In this exercise were going to explore Angular CLI

- Learn how to execute Angular CLI commands and how to get and use`--help` for given command
- Create new Angular workspace
- Learn how to use Angular schematics
- Create application in the workspace
- Run the application (and options)
- Build the application (and options)
- Test the application (and options)
- Analyze the application
- Explore workspace configuration
- Add Prettier support
- Remove default placeholder content
- Add Angular Material component framework

## TODO 1 - Learn how to use Angular CLI

0. Run `ng --version` to  confirm version of your global Angular CLI (should be latest). If not, please update it using `npm i -g @angular/cli@latest`.
1. Run `ng` command to see all the available Angular CLI commands
2. Try running `ng <some-command> --help` (please use `ng new --help`) as we're not in Angular workspace yet

## TODO 2 - Create new Angular workspace

1. Workspaces are created using `ng new` command but before we execute it explore available options
2. Run `ng new exercise-angular-cli` command with options that disable the creation of an initial application `--create-application false`, sets `--style` to `scss` , enables `routing` and sets `prefix` to `my-org` (hint: use `ng new --help` to see what are the exact options to achieve this)
3. Once done, explore the generated workspace folder in your console and inspect the generated files in your IDE (eg `cd exercise-angular-cli`)

## TODO 3 - Learn how to use Angular schematics

1. Once in an Angular workspace we can start using Angular schematics to scaffold code instead of writing it manually
2. Schematics are executed using`ng generate` (or `ng g`), running this command will give us list of all available schematics (hint: you might need to enable / disable Angular CLI anonymous stats reporting when running a command for the first time in a new workspace)
3. Similarly, to Angular CLI we can explore schematics option using `ng g <scheamtic-name> --help`

## TODO 4 - Create application in the workspace

1. Application in a workspace can be generated using Angular schematics
2. Explore options of `application` schematics using `--help` flag
3. Create an application with name `customer-admin-app` and following options: enabled `routing`, `scss` style and `my-org` prefix
4. Once done explore what was generated inside your IDE

## TODO 5 - Run the application

1. Once we created our application we can run it in two ways, first being `ng serve` (and second being `npm start`, check that script in the `package.json` file)
2. Open browser at `http://localhost:4200` to see the application running
3. Adjust the `start` script in the `package.json` file by adding `--open` flag, stop running app and restart it using `npm start`
4. Once running open your browsers DEV tools and explore the network tab about what kind of files represent the application and check their size (refresh application once the tab was opened)
5. Add new `start:prod` script to your `package.json` file and add both `--open` and `--configuration production` flags (`--prod` flag was used in previous versions), stop running app and restart it using `npm run start:prod`
6. Once running open your browsers DEV tools and explore the network tab about what kind of files represent the application and check their size

## TODO 5 - Build the application

1. Serving application is great for the development purposes, but we have to build artifacts to deploy to production
2. Build application using `ng build` (or `npm run build`, notice the `run` keyword, every script besides `start` and `test` have to use `run`)
3. Once done explore the `dist` folder
4. Add new `build:dev` script to your `package.json` file and add `--configuration development` flags, and build your application again using `npm run build:dev`
5. Once done explore the `dist` folder
6. What other difference besides the size of the files was between the DEV and the PROD mode and what is its purpose?
7. Explore options of `ng build` script using `--help` flag
8. Open `.browserslistrc` file (`projects/customer-admin-app/`) and explore its content and enable IE 11 by removing the `not` keyword (deprecated as of Angular 12 but still works, most likely the IE11 support is going to be removed in Angular 13)
9. Build your application again using `npm run build`
10. What files have been generated compared to previously and why? (hint: es5 vs es20XX suffix)
11. Re-disable IE11 build by adding back the `not` keyword
12. Explore [browserslist](https://browsersl.ist/?q=last+1+Chrome+version%2C+last+1+Firefox+version%2C+last+2+Edge+major+versions%2C+last+2+Safari+major+versions%2C+last+2+iOS+major+versions%2C+Firefox+ESR%2C+not+IE+9-10%2C+not+IE+11) for your query

## TODO 6 - Test the application

1. Run `ng test` (or `npm test`)
2. Explore the new opened browser window
3. Stop the test script and open `karma.conf.js` file (`projects/customer-admin-app/`)
4. Change `browsers: ['Chrome'],` to `browsers: ['ChromeHeadless'],` and set `singleRun` to `true`
5. That way we get single test run scenario which is great for continuous integration
6. Add `test:watch` script to your `package.json` file which will execute `ng test` with`--watch` flag and run it
7. Install `karma-spec-reporter` package using `npm i -D` (install dev dependency) and add it to the plugins in `karma.conf.js` file
8. Adjust your `test:watch` script in `package.json` by adding `--reporters spec` flag and run it
9. Check out the new test output
10. Try breaking a test by changing `toEqual('customer-admin-app');` in the `app.component.spec.ts` file (`/projects/customer-admin-app/src/app/`) to `customer-admin-app 1`
11. Check out the new test output and try changing tests a couple of times
12. Set up linting support using `ng add @angular-eslint/schematics` (This replaces deprecated `tslint` which was included out of the box in previous Angular versions) Once done, copy the root level `.eslintrc` file into the `exercise-angular-cli` folder. Finally, run `ng lint` and explore the output.
13. (Optional) Set up E2E (end-to-end) tests using `ng add @cypress/schematic` and agree to the CLI prompts. Once done, copy the root level  `cypress.json` file into the `exercise-angular-cli` folder.  Finally, run `ng e2e` and try to fix first out-of-the-box test.

### Continuous Integration testing
It usually makes sense to create dedicated `ci` npm script in package json which will execute all the tests when project is built in the CI environment, such a command can look like `"ci": "ng lint && ng test && ng build"`...

## TODO 7 - Analyze application

Analyzing application can come in handy when debugging produced bundle size...

1. Install `webpack-bundle-analyzer` as a dev dependency (`npm i -D`)
2. Add `analyze` script to your `package.json` file which will run `ng build` with `--stats-json` flag
3. Extend the command with `&& webpack-bundle-analyzer ./dist/customer-admin-app/stats.json` (or `stats-es2015.json` based on your current browserslist / differential loading configuration)
4. Run the analyze command and explore the website in opened tab (try checking "Show content of concatenated modules" checkbox)

### Troubleshooting

On MS Windows machines without GitBash, WSL or cygwin it might NOT be possible to use `&&` to chain commands in the npm scripts
In that case we have to install `npm i -D npm-run-all` package and change our `analyze` script to look like this...

```json
{
  "scripts": {
    "analyze": "npm-run-all analyze:*",
    "analyze:stats": "ng build --stats-json",
    "analyze:open": "webpack-bundle-analyzer ./dist/customer-admin-app/stats.json"
  }
}
```

## TODO 8 - Explore workspace configuration

Our workspace setup is pretty much done, let's see how it looks like and what can be configured...

1. Open `angular.json` file in the workspace root, it represents the main descriptor and configuration of the whole workspace
2. Depending on your IDE, try to collapse `projects` property
3. Our workspace currently has only one project (`customer-admin-app`) and for that reason it was set as the `defaultProject`, single workspace can host multiple apps and libraries and the `defaultProject` tells CLI to run given command against that project by default, we can still build other project by specifying it using `--project` flag so for example we could use `ng build --project some-other-app`
4. Inside of `customer-admin-app` you can find `architect` property with `build` property and finally `configuration` property, here you can see what options are applied by default with the `production` configuration (it is possible to define your own custom configurations which then can be activated using `--configuration <my-config>` flag when running commands)
5. Find `budgets` in the `build` configuration, this feature enables your build to fail if the size of the bundle crosses specified threshold, try to set it lower and run `npm run build` to see it fail... (hint: reduce warning to 0.1mb and error to 0.2mb for the `initial` bundle type)
6. Explore the `schematics` property of the `customer-admin-app`, here you can set schematics defaults so let's say if you always wanted to use components with inline templates instead of standalone HTML file you could specify it here instead of always writing `ng generate component some-component --inline-template`
7. Try to use code completing (of your IDE) inside of schematics configuration and you should get hints about all the available options

## TODO 9 - Add Prettier support

Prettier is amazing frontend tooling package which enables an autoformatting of your source code and lets you focus on developing features instead!

1. Install `prettier` as a dev dependency `npm i -D`
2. Create `.prettierrc` file in the workspace root and add the following content

```json
{
  "singleQuote": true,
  "printWidth": 100
}
```

3. Try to go to any source file in the `customer-admin-app`, (eg `app.component.ts`) and break formatting, then depending on IDE try to run prettier

   - Intellij IDEA - press `CTRL ALT SHIFT P` (check your plugins if it doesn't work...)
   - VS Code - install prettier extension, and then it should be available with `SHIFT ALT F`

4. Add `format:write` script to your `package.json` file with `prettier \"projects/**/*.{ts,scss,json,html,js}\" --write` content
5. Add `format:test` script to your `package.json` file with `prettier \"projects/**/*.{ts,scss,json,html,js}\" --list-different` content
6. Try running the `format:test` followed by the `format:write` and again followed by `format:test`, all the errors should be gone!

## TODO 10 - Remove default placeholder content
As we might have noticed, running freshly generated application comes with some default content which
gives us some pointers about the next steps. That being said we need to get rid of it to start developing our own features.

1. Open the `app.component.html` file and delete all its content.
2. Add `<h1>{{title}} app is running!</h1>` instead
3. Open the `app.component.spec.ts` file and change `compiled.querySelector('.content span')` to `compiled.querySelector('h1')`
4. Try to run tests using `npm test`


## TODO 11 - Add Angular Material component framework

Angular Material is the "official" component framework developed by the Angular team and open source collaborators, as such 
it represents a great starting point for developing beautiful Angular applications ( alternative options being other 3rd party component frameworks or your own custom framework, but that takes LOTS of time, skill and dedication...)

Setting up Angular Material is relatively simple and includes a couple of steps and choices to be made on the way...

Luckily, Angular CLI and Angular Schematics support automation of this process using `ng add` command!

1. Run `ng add --help` to see available options, the `collection` stands for the package to be added and in our case that will be `@angular/material`
2. Run `ng add @angular/material`, the package will be installed and the Angular Schematics will prompt us for some required options that we didn't provide with the command
3. Choose `Custom` theme
4. Confirm setup of global Angular Material typography styles
5. Add browser animations
6. Once done, the command line will inform us about what changes have been made by running the `ng add` schematics, let's explore these files...
    * `app.module.ts` - the `BrowserAnimationModule` was added
    * `index.html` - schematics added links to fonts used by Angular Material and the `mat-typography` class on the `<body>` tag
    * `styles.scss` - large custom theme setup was added automatically including hints how to adjust it further!
    
7. All this setup executed seamlessly with the power of Angular Schematics, pretty epic! Remember, many popular 3rd party libraries come with the `ng add` support simplifying the setup and usage dramatically!
8. Run application using `npm start` to see how `mat-typography` affected the fonts


# Great! We have set up nice Angular workspace and are ready for the development!
