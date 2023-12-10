# angular-dotnet-realworld
Use Angular 17 and .NET 8 to create a medium.com clone.

# Helpful Links
1. [Full stack web dev in Rider](https://www.jetbrains.com/guide/dotnet/tips/full-stack-web-development-with-rider/)
2. gothinkster demo [app](https://github.com/gothinkster/angular-realworld-example-app)
3. Jason Watmore's [Angular series](https://jasonwatmore.com/angular-15-free-course-1-create-base-project-structure)
4. Angular [official docs](https://angular.dev/tutorials)
5. Josh Morony's [Angular course](https://angularstart.com/)
6. Envato Tuts+'s [Angular tutorial](https://youtu.be/JWhRMyyF7nc?si=3mllCIMx1v5PTJZw)

# Setup Node
Node.js is a JavaScript-based runtime environment that executes JS code outside of a web browser. You can use it to create web-servers and networked applications. You can also use it to perform helpful tasks on your computer such as concatenating and minifying JavaScript files and compiling Sass files into CSS.

NPM is a “package manager” that makes installing Node “packages” fast and easy. A package, also called a module, is just a code library that extends Node by adding useful features. For example, the “request” module simplifies the process of making HTTP requests so you can easily get web resources from other sites.

NPM is installed when you install Node.js.

## Uninstall old node
Find the node (below command shows you the location of the file for a given command)
```bash
which node
```
<img width="450" alt="image" src="https://github.com/affableashish/angular-dotnet-realworld/assets/30603497/d91e2ed4-40ca-4459-b9a2-bb14911856ae">

Now remove that
```
sudo rm -rf /usr/local/bin/node
```

Also remove these files and folders
```bash
sudo rm -rf ~/.npm ~/.npm-global ~/.node-gyp ~/.npmrc ~/.node_repl_history

sudo rm -rf /usr/local/bin/npm /usr/local/bin/npx

sudo rm -rf /usr/local/share/man/man1/node*
sudo rm -rf /usr/local/share/doc/node
sudo rm -rf /usr/local/share/systemtap/tapset/node.stp

sudo rm -rf /usr/local/include/node
sudo rm -rf /usr/local/lib/node_modules /usr/local/lib/dtrace/node.d
```

[Reference](https://stackoverflow.com/a/62356228/8644294)

## Install nvm
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.6/install.sh | bash
```

Make your terminal pick up the nvm command that was set by the installation in your `~/.bash_profile` file
```bash
. ~/.bash_profile
```
This is called sourcing and it executes commands from the file (`.bash_profile` here) in the current shell environment. This will pick up the changes to your profile without having to close and reopen the terminal.

Now check your `nvm` version

<img width="400" alt="image" src="https://github.com/affableashish/angular-dotnet-realworld/assets/30603497/8ab6cd22-8492-49f0-95b5-8d355ff2aa8d">

Later when you want to **uninstall** `nvm` do the following
```bash
$ rm -rf "$NVM_DIR"
```

Edit `~/.bash_profile` and remove the lines below
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
[[ -r $NVM_DIR/bash_completion ]] && \. $NVM_DIR/bash_completion
```

[Reference](https://github.com/nvm-sh/nvm#installing-and-updating)

## Install node
Install the latest lts version.
```bash
nvm install --lts
```

<img width="650" alt="image" src="https://github.com/affableashish/angular-dotnet-realworld/assets/30603497/56703672-6285-4a8e-b984-bb17299ae7e7">

Now check it  
<img width="450" alt="image" src="https://github.com/affableashish/angular-dotnet-realworld/assets/30603497/3fd706e0-16c8-4954-a49c-9a1b52ffb9be">

[Reference](https://heynode.com/tutorial/install-nodejs-locally-nvm/)

## npm vs npx
### npm
It is used to install, update, and manage packages from the npm registry in your projects or globally on your machine.  
For eg:
```bash
npm install --save-dev --save-exact prettier
```
### npx
`npx` is typically thought of as 'npm execute'. It allows you to run packages.

For eg:
```bash
npx prettier --write somefile.js
```

It first looks into your local project's dependencies for a command. If it can't find it locally, then it searches in globally installed packages. And if it can't find it there either, npx will temporarily download, use, and remove the package - helping ensure you use the latest version all the time without needing to permanently install it.

# Setup Angular CLI (Can be skipped as I create projects using Nx in the create projects section below)
[Reference](https://angular.dev/tools/cli/setup-local)

Choose either way (1 or 2) shown below.

1. Installs the Angular CLI package locally in the current directory.
   ```bash
   npx --package @angular/cli
   ```

2. Installs the Angular CLI package globally on the computer.
   ```bash
   npm install -g @angular/cli
   ```

Now check the Angular version
```bash
ng version
```

<img width="500" alt="image" src="https://github.com/affableashish/angular-dotnet-realworld/assets/30603497/df24558b-477d-4146-933d-ef7e9ce20dfc">

If it asks you to allow angular cli to autocomplete commands, choose Y which will write this to your `.bash_profile`:

<img width="400" alt="image" src="https://github.com/affableashish/angular-dotnet-realworld/assets/30603497/70f6a3d1-79fb-4cf8-a529-780421099368">

Later when you want to **uninstall** Angular CLI, you can simply do this
```bash
npm uninstall -g @angular/cli
```

# Setting up your IDE
I'm using Jetbrains Rider. It already comes with the features present in WebStorm so I don't have to use a separate IDE for doing full stack work.

<img width="600" alt="image" src="https://github.com/affableashish/angular-dotnet-realworld/assets/30603497/f99a9814-0ef9-4f9e-aa39-68be1aeebb7a">

[Reference](https://www.jetbrains.com/rider/features/)

## Settings in your Jetbrains IDE Rider
1. Show memory
   
   <img width="650" alt="image" src="https://github.com/affableashish/angular-dotnet-realworld/assets/30603497/a3d99d4b-542c-4860-a460-f30b81fd3c9f">

   The memory shows up in the bottom right corner. You can force GC to kick in when your IDE starts getting slow.

   <img width="200" alt="image" src="https://github.com/affableashish/angular-dotnet-realworld/assets/30603497/cb655f07-317e-441a-88c1-8c2f820ee019">

2. I'll add more when I find more cool settings to turn on...

## Plugins in your Jetbrains IDE Rider
### Preetier
[Setting up Prettier in Jetbrains IDEs](https://prettier.io/docs/en/webstorm)

Standard for working with JS TS projects. Rider already comes bundled with it

<img width="550" alt="image" src="https://github.com/affableashish/angular-dotnet-realworld/assets/30603497/7fe063f4-734c-4b65-a15d-b8ab81f2da3e">

The IDE already uses Prettier but to make the settings consistent across teams, you might want to install it as a dev dependency of the project so that everyone who works on this project use the same preetier version and preetier settings. This will appear in `package.json`.
```bash
npm install --save-dev --save-exact prettier
```

`--save-dev` means to install that package as a dev dependency which is a dependency that is only required for dev and testing.  
By installing it as a development dependency, you can ensure that it is not included in the production build of your application, which can help reduce the size of the final bundle.

`--save-exact` is used to lock the version of the package you're installing. This is useful when you want to ensure that your application always uses a specific version of a package, even if newer versions are released. 

For eg:
```
  "prettier": "^2.6.2", // This isn't exact because package manager can update the Minor version (^)
  "prettier": "2.6.2", // This is exact
```

### AceJump
https://plugins.jetbrains.com/plugin/7086-acejump
### String Manipulation
https://plugins.jetbrains.com/plugin/2162-string-manipulation
### Nx Console
https://plugins.jetbrains.com/plugin/21060-nx-console

# Why Nx?
## Monorepos
[Understanding Monorepos](https://monorepo.tools/#understanding-monorepos)

A monorepo is a single repository containing multiple distinct projects, with well-defined relationships.

<img width="450" alt="image" src="https://github.com/affableashish/angular-dotnet-realworld/assets/30603497/2a374d20-6776-4e5a-a05e-27c03560e1d4">

## Monorepos can help increase velocity
[Reference](https://devblogs.microsoft.com/startups/using-monorepos-to-increase-velocity-during-early-stages-of-product-development/)

# Create frontend and backend projects
## Create a GitHub repo to host your mono repo
In this example, I created this repo to host my projects. Note that I'll use the name of this repo (`angular-dotnet-realworld`) as the name of the workspace when I create nx-workspace below.

## Create frontend project that uses Angular
Reference: [Getting Started with Nx](https://nx.dev/getting-started/installation)  
Reference: [Create Nx Workspace](https://nx.dev/nx-api/nx/documents/create-nx-workspace)  
Reference: [Angular Monorepo Tutorial](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial)  

Open Terminal in your rider and create nx workspace

```bash
Ashishs-MacBook-Pro:RiderProjects ashishkhanal$ npx create-nx-workspace@latest --skipGit=true
```
(As you can see, I'm not inside the repo/ project folder while running the command. The repo folder will be created by above command)

The questions and answers I chose are as follows
```
✔ Where would you like to create your workspace? · angular-dotnet-realworld
✔ Which stack do you want to use? · angular
✔ Integrated monorepo, or standalone project? · integrated (Integrated Monorepo:  Nx creates a monorepo that contains multiple projects.)
✔ Application name · angular-client
✔ Which bundler would you like to use? · esbuild
✔ Default stylesheet format · css
✔ Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? · No
✔ Test runner to use for end to end (E2E) tests · playwright
✔ Enable distributed caching to make your CI faster · No
```

Typically, an integrated Nx workspace places application projects in the apps folder and library projects in the libs folder. Applications are encouraged to be as light-weight as possible so that more code is pushed into libraries and can be reused in other projects.

The nx.json file contains configuration settings for Nx itself and global default settings that individual projects inherit.

## Take a look at generated files
`.prettierrc` just means configuration file for Prettier. It contains rules and settings that need to be applied when the tool is run. It's a convention that started with UNIX systems where an "rc file" contained "run commands" to be run at startup.

1. https://github.com/affableashish/angular-dotnet-realworld/blob/7e92ad7a28b37f09767aafe20a595437077e6e8b/.editorconfig#L1-L19
   EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.  
   Read more [here](https://editorconfig.org/).
2. https://github.com/affableashish/angular-dotnet-realworld/blob/7e92ad7a28b37f09767aafe20a595437077e6e8b/.eslintignore#L1
   This file is used to specify files or directories that ESlint should ignore while linting the code.  
   ESLint is a configurable JavaScript linter. It helps you find and fix problems in your JavaScript code. Problems can be anything from potential runtime bugs, to not following best practices, to styling issues. 
   Read more [here](https://eslint.org/docs/latest/use/core-concepts).
3. https://github.com/affableashish/angular-dotnet-realworld/blob/7e92ad7a28b37f09767aafe20a595437077e6e8b/.gitignore#L1
4. https://github.com/affableashish/angular-dotnet-realworld/blob/7e92ad7a28b37f09767aafe20a595437077e6e8b/.prettierignore#L1-L5
   This file is used to specify the files or directories that Prettier should ignore.
   Prettier is an opinionated code format tool which ensures that all your code adheres to a consistent style.
   Read more [here](https://prettier.io/docs/en/).
5. https://github.com/affableashish/angular-dotnet-realworld/blob/7e92ad7a28b37f09767aafe20a595437077e6e8b/.prettierrc#L1-L3
   This is the configuration file for Prettier. You can specify your preferences for formatting options like print width, tab width, use of semi-colons, and single or double quotes, etc.

   `.prettierrc` just means configuration file for Prettier. It contains rules and settings that need to be applied when the tool is run. It's a convention (the rc part) that started with UNIX systems where an "rc file" contained "run commands" to be run at startup.
6. https://github.com/affableashish/angular-dotnet-realworld/blob/7e92ad7a28b37f09767aafe20a595437077e6e8b/.eslintrc.json#L1
   This is the configuration file for ESlint. It is used to specify the parser options and rules for ESlint.
   As you can see there are no rules (formatting) in the file. Because config for that is already stored in `.prettierrc`.
7. https://github.com/affableashish/angular-dotnet-realworld/blob/7e92ad7a28b37f09767aafe20a595437077e6e8b/jest.config.ts#L1
   This file is used to specify the configuration for Jest, a JavaScript testing framework.
   You can specify options that define how Jest runs your tests, which files it should test, any setup tasks that need to be completed before tests run, and more. By convention, it is written in TypeScript (ts).
8. https://github.com/affableashish/angular-dotnet-realworld/blob/7e92ad7a28b37f09767aafe20a595437077e6e8b/jest.preset.js#L1
   
   
Note:

| Eslint | Prettier |
|---|---|
| It has formating rules (mainly focused on style) | It has formating rules |
| It ensures code quality | |


### Taking a look inside node_modules folder
Let's check out this package and learn

<img width="550" alt="image" src="https://github.com/affableashish/angular-dotnet-realworld/assets/30603497/7d79ab1e-5203-4af3-a5ab-645b727da7e4">

#### index.js file (JS entry file)
In `Node.js`, each file has its own module object (global object), and `module.exports` is a property of that object.
`module.exports` is used to export a module's public API, i.e., the values, functions, or objects that you want to make available for other modules to import and use. Here, it's used to export a function that word-wraps a string.

By assigning a value to `module.exports`, we specify what will be exposed from a file when require is called. 
```js
/* This is inside index.js*/
module.exports = function(str, options) {
  options = options || {};
  if (str == null) {
    return str;
  }
}
```

To use it
```js
// assuming word-wrap.js is in the same directory.
var wrap = require('./word-wrap'); 

var textToWrap = "This is some really long text that we want to wrap to multiple lines";
var wrapOptions = {
  width: 20,
};

var wrappedText = wrap(textToWrap, wrapOptions);
```

#### index.d.ts file
This is a TypeScript declaration file. It provides types for JavaScript code to the TypeScript compiler. The `.d.ts` extension indicates that this is a Declaration File, hence the d in the name. Declaration files are used to tell TypeScript that some specific types of objects conform to an interface, without providing an actual implementation.

```ts
/* This is inside index.d.ts*/
export = wrap;
declare function wrap(str: string, options?: wrap.IOptions): string;
declare namespace wrap {
    export interface IOptions {
        width?: number;
        /*and so on...*/
  }
}
```
`export = wrap` is a TypeScript-specific syntax that indicates the object (`wrap` function in this case) to be exported as a single entity. In CommonJS (Node.js) terms, it is equivalent to `module.exports = wrap`.

`declare function wrap(...)`, tells TypeScript that there is a function called `wrap` that takes certain parameters and returns a specific type, but we're not going to provide the implementation here. We are simply describing the shape of a function.

The type signature specified in index.d.ts should match the actual JavaScript implementation in index.js file.

We could use this package in some TS code like so
```ts
import * as wrap from 'word-wrap';

const options: wrap.IOptions = {
  width: 30
};

const input = "This is a really long string that needs to be wrapped after a certain number of characters per line";

const result = wrap(input, options);

console.log(result);
```

If there was no `index.d.ts` file, we could use `index.js` file present inside `node_modules/word-wrap` folder in JS code like so
```js
// load the module
// Node.js will look for the module named 'word-wrap'
// (it does this by searching in node_modules directory and some other locations),
// find its JavaScript entry file (index.js in the case of most modules),
// and execute the code in that file.
// Whatever is assigned to module.exports in index.js is then returned by require('word-wrap').
var wrap = require('word-wrap');

// prepare the options
var options = {width: 30};

// prepare the text to wrap
var input = "This is a really long string that needs to be wrapped after a certain number of characters per line";

// Use the function
var result = wrap(input, options);

console.log(result);
```







in a TS 











1. .eslintignore: This file is used to specify files or directories that ESlint should ignore while linting the code. ESlint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
.prettierignore: Similar to .eslintignore, this file is used to specify the files or directories that Prettier should ignore. Prettier is an opinionated code format tool which ensures that all your code adheres to a consistent style.
.prettierrc: This is the configuration file for Prettier. You can specify your preferences for formatting options like print width, tab width, use of semi-colons, and single or double quotes, etc.
.eslintrc: This is the configuration file for ESlint. It is used to specify the parser options and rules for ESlint.
jest.config.js: This is the configuration file for Jest, a JavaScript testing framework developed by Facebook. Here you can specify settings related to how Jest will run tests on your application.
nx.json: This is the configuration file for Nrwl NX. Nx is a suite of powerful, extensible dev tools to help you architect, test, and build at any scale – integrating seamlessly with modern technologies and libraries while providing a robust CLI, caching, dependency management and more.
package.json: This is a file is used by NPM to store metadata for projects published as NPM modules. It contains information about your project, such as its name, version, description, and what dependencies it has that npm needs to install.
package-lock.json: This is automatically generated for any operations where npm modifies the node_modules or the package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.
tsconfig.base.json: This is a special TypeScript configuration file that specifies root files and compiler options required to compile the project. TypeScript is a strict syntactical superset of JavaScript and adds optional static typing to the language. .base is typically the main config file, while others tsconfig.*.json on the workspace extend this main file.

### Run the app
Navigate to the workspace folder and server the app
```bash
cd angular-dotnet-realworld
nx serve angular-frontend
```

Or you can just use Nx Console to run it

<img width="400" alt="image" src="https://github.com/affableashish/angular-dotnet-realworld/assets/30603497/71bfef49-ad36-4adf-9f73-12f2e79dd146">

The app starts running at `http://localhost:4200/`

<img width="650" alt="image" src="https://github.com/affableashish/angular-dotnet-realworld/assets/30603497/d9af2dfd-fcb4-4545-b349-9d78182170e3">

Get ready for next steps

<img width="400" alt="image" src="https://github.com/affableashish/angular-dotnet-realworld/assets/30603497/0b4c52b4-bf55-4a7e-a890-381451b58dbb">

## Push nx-workspace to your GitHub repo
Clone this empty Git repo down to your local.  
Make sure to change the name so as not to match with what you already have, i.e. `angular-dotnet-realworld`.

<img width="550" alt="image" src="https://github.com/affableashish/angular-dotnet-realworld/assets/30603497/de9c4725-e347-43e4-8a05-c5f0fc57f8fb">

Now copy hidden `.git` folder from this cloned folder to your nx-workspace folder.

<img width="300" alt="image" src="https://github.com/affableashish/angular-dotnet-realworld/assets/30603497/f720faff-c924-47fa-ad8a-754ab2079f3b">

Since I already have my `README` file from GitHub repo creation, rename the `README` from nx-workspace to `NxREADME`.

Go to commit window, add the files and commit + push to GitHub.

<img width="350" alt="image" src="https://github.com/affableashish/angular-dotnet-realworld/assets/30603497/202928e0-882a-4aea-8cf2-2e18ef6639ae">

## Create backend project that uses .NET
Reference: [Nx .NET Tutorial](https://nx.dev/showcase/example-repos/add-dotnet)  
Reference: [Nx using .NET and Github Actions]https://www.youtube.com/live/uS9RSoqTwVw?si=WozC85bXrGn7aSWD)









### Create Nx workspace
### Install plugin to your workspace as a dev dependency
npx add -D @nx-dotnet/core

Check everything about the plugin
nx list @nx-dotnet/core

It'll show you info about the generators and executors/builders.
 
### Run init generatro
nx g @nx-dotnet/core:init <appName. Not sure if this is optional. Time will tell.>

This updates nx.json, package.json, creates Directory.Build.props, Directory.Build.targets etc.

Now nx.json will have "nx-dotnet/core" inside "plugins array. It just tell that "hey, now we're going to analyze dotnet files now"

paclage.json will have "@nrwl/js" for TS type generation and also have "@nx-dotnet/core"

It'll also add "dotnet-tools.json", this enables you to extend the .NET cli. It keeps track if tools (like EF) you install and what version they're at.

Directory.Build.props, Directory.Build.targets get added to root.

Directory.Build.props <--- Kinda like variable declarions.
Directory.Build.targets <--- 


Now you can add your .NET project anywhere like by going to a folder (inside the nx workspace) and do `dotnet new webapi` or something and it should be picked up by Nx and shown in the `nx graph`.
But Nx recommends creating apps with their generatoru because you get niceer stuffs.

```
nx g @nx-dotnet/core:app dotnet-api
```

There's a question:
Which path naming conventions should the project use? Since you're using nx, use nx.

nx <--- use-kebab-case
dotnet <--- Use.Pascal.Case

There's guide for dealing with .sln files in the docs. Solutions aren't preferred when you're using Nx workspace though.

You can install NxConsole and take a look at it.

You can hit "Serve" to launch the app.

Inside libs, you'll see few projects. Like thge swagger one.
If you run it, you'll update swagger.json.

libs/generated/your-api-swagger/project.json
There's codegen which if you run will update  TS types.
You can run it like
```
nx run your-api-swagger:codegen
```

You can see this generated type in:

libs/generated/your-api-types/src/interfaces/todo.ts <-- DTO for your C# endpoint to be used in frontend

which can be used by the frontend client.

If you use this in frontned like so
`import { Todo } from '@deno-todo/generated/your-api-types';`

Nx will trace the depenedency back to this generated library, and this generated library knows that whenever it builds it has to run codegen first, codegen knows it has to run swagger first.

So if you change your model in the backend you'll start getting error in the frontend automatically. There's nice type safety there.


Take a look at the graph.

``nx graph`

### Containerization using nx-container
[Reference](https://github.com/gperdomor/nx-tools/blob/main/packages/nx-container/README.md)

[Example with Kubernetes](https://creotip.io/posts/nx-monorepo-running-microservices-locally-with-docker-kubernetes).

[Fullstack example - Looks nice](https://thefullstack.engineer/full-stack-development-series-part-1-getting-started-with-nx-angular-and-nestjs/)








Nx -> RxJs (+Signals in the future) -> Setup Rider for Frontend dev -> Code along with Monsterlessons guy + official docs


# Create a project
[Reference](https://angular.dev/tools/cli/setup-local#create-a-workspace-and-initial-application)

1. Clone this repo down to your IDE
2. Create a new app
   ```bash
   ng new medium
   ```

[Workspace](https://angular.io/guide/glossary#workspace): A collection of angular projects (that is, applications and libraries) powered by the Angular CLI that are typically co-located in a single source-control repository.

# JS Event Loop (Prelude to RxJS stuffs)
[Reference](https://youtu.be/8aGhZQkoFbQ?si=18SXPdusSrtiTED2)

A single threaded, non-blocking, asynchronous, concurrent language.
It has a call stack, an event loop, a callback queue and some other apis.

JS runtime like V8 has call stack and a heap, but not the other stuffs.

<img width="500" alt="image" src="https://github.com/affableashish/angular-dotnet-realworld/assets/30603497/95c1dc0d-7993-4edb-a774-0bacc0b0108d">

Since JS is single threaded, it has single stack. So it can only do one thing at a time.

For eg:

Here the main() is the anonymous function you see in browser console which calls `printSquare(4)` which then calls `square(n)` and finally `multiply(n, n)`. When `return a * b` is executed, the stack gets removed in reverse order.

<img width="600" alt="image" src="https://github.com/affableashish/angular-dotnet-realworld/assets/30603497/c0f71944-314c-4c5d-8403-13af8d64f023">

If the call stack has things on it, the browser can't do anything else. It gets stuck.

The **solution** is _asynchronous callbacks_.

For eg:  
Below shows how the browser and runtime work to make an asynchronous call.

Call Stack: 
1. At first line
   ```
   log('Hi')
   main()
   ```
   <img width="600" alt="image" src="https://github.com/affableashish/angular-dotnet-realworld/assets/30603497/e7f00fac-aeef-4239-9f75-27dbf3a041fa">
2. At second line
   ```
   $.get('url', cb)
   main()
   ```
   <img width="600" alt="image" src="https://github.com/affableashish/angular-dotnet-realworld/assets/30603497/f9aa89ac-e748-4361-bedf-c86bd27d54f1">
   
   The code for running this AJAX request (`XHR`) doesn't live in the JS runtime, it lives in the browser as a web api so we spin it up with a callback. And the code continues to run by going to next line.
3. At third line
   ```
   log('JSConfEU')
   main()
   ```
   After third line completes, the call stack is empty.
4. When the `$.get` AJAX request completes, callback gets pushed to the queue

   <img width="600" alt="image" src="https://github.com/affableashish/angular-dotnet-realworld/assets/30603497/f3b8349f-013b-4b06-ba56-f08e5f2b9877">

5. Event loop picks the callback up and pushes it to the stack and it's run.

   <img width="600" alt="image" src="https://github.com/affableashish/angular-dotnet-realworld/assets/30603497/b3daef5e-2721-4ff5-9375-ac4f83ae687c">

6. The end

   <img width="600" alt="image" src="https://github.com/affableashish/angular-dotnet-realworld/assets/30603497/621b2402-5558-4172-9618-81db65d20fd4">

# 
[Reference]()
