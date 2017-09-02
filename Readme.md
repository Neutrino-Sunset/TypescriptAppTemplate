# TypescriptAppTemplate Overview

In addition to web server code Node.js can be used to debug and execute standalone Javascript scripts. These scripts can reference additional modules as separate Javascript files on disk or installed using npm giving them the potential to be highly functional standalone programs. While a Node.js project directory containing many additional dependencies can still be executed directly in Node.js (using node.exe), distribution of the project can be greatly simplified by bundling the entire project into a single Javascript file. WebPack can be installed as an npm module and used for this purpose.

While highly functional programs can be written in Javascript directly, many people find it easier to write robust and readable code using Typescript. Node.js does not support executing Typescript directory but support for it can be added by installing the necessary npm modules.

This project template forms the basis of a simple Node.js application that comes with preconfigured support for transpiling Typescript, debugging the project using Visual Studio Code, and bundling the entire project to a single Javascript file using WebPack.

While there are project generators available that already create project templates for a wide variety of Node.js applicatons (e.g. Yeoman), the project templates these generators create can be quite complex to start with, and the generators themselves can also bring additional complexity of their own. By contrast this template aims to provide core functionality in the simplest manner possible, and also documents the steps by which the entire template can be recreated from scratch providing the option of easily reconfiguring it to support a specific requirement.


# To Use The Template Directly

* Clone template to new directory.
   * Create project directory `md Project1`
   * Open project directory in VSCode `code Project1`
   * Using VSCode integrated terminal clone repository into directory
   `git clone https://github.com/Neutrino-Sunset/TypescriptApp1.git .`
* If desired update the project name in packages.json `name` field.
* If desired update the project output file name in webpack.config.js `filename` field.
* Run `npm i` to install all modules.
* Run `tsc` to transpile Typescript to Javaascript for debugging in VSCode, (or run `tsc -w` and tsc will monitor all Typescript files and transpile automatically whenever they are modified).
* Run `npm run build` to bundle the entire application to a single Javascript file using WebPack. On Windows this Javascrpt file can be executed by passing it to the Node.js interpreter `node.exe <applicationname>.js`, or you can right click the file, select `Open With...` select `node.exe` from wherever you have Node.js installed, and then `<applicationname>.js` can be executed directly from either a command prompt or from Explorer.


# How The Template Was Created From Scratch

## Typescript and debugging

* Create a directory and open with VSCode
* Create entrypoint file Main.ts with the following basic startup code.

```javascript
class Startup {
   public static main(): number {
      console.log('Hello Typescript World!');
      return 0;
   }
}
Startup.main();
```

* Initialise npm `npm init` ensuring 'name' is all lowercase and `main` is `Main.ts`, accept all other defaults.
* Install typescript and nodejs typescript types `npm i --save-dev typescript @types/node`
* Generate tsconfig.json `tsc --init`
* In tsconfig.json uncomment `"sourcemap": true`
* In tsconfig.json uncomment `"outDir":` and set path to `./out`
* Build typescript `tsc` (can perhaps skip this step when VSCode bug #31977 is fixed)https://github.com/Microsoft/vscode/issues/31977
* Generate launch.json file. Press F1, enter `Debug: Open launch.json`, when prompted select environment `node.js`
* Debug by pressing `f5`. Restart Debug using `ctrl+shift+f5`
* Transpile .ts files as they change by placing tsc in watch mode using `tsc -w`


## Installing third-party modules

* Install third-party module e.g. `npm i --save underscore`
* Install Typescript types for third-party module to enable intellisense e.g. `npm i --save-dev @types/underscore`


## Bundling with WebPack

* Install WebPack and ts-loader `npm i --save-dev webpack ts-loader`
* Create basic webpack.config.js e.g.

```javascript
module.exports = {
   entry: './Main.ts',
   module: {
      rules: [
         {
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
         }
      ]
   },
   resolve: {
      extensions: [ ".ts", ".js" ]
   },
   output: {
      filename: './dist/TypescriptApp5.js'
   }
}
```

* Build using webpack `./node_modules/.bin/webpack`
* Run application `.\dist\JavascriptApp2.js` (requires .js files to be set to open using nodejs.exe).

* Create npm script to run webpack via npm by adding the following script to packages.json

```javascript
"scripts": {
   "build": "webpack"
},
```

* Now WebPack can be run via `npm run build`
