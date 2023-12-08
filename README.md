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

# Setup Angular CLI
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

Later when you want to **uninstall** Angular CLI, you can simply do this
```bash
npm uninstall -g @angular/cli
```

Now check the Angular version
```bash
ng version
```

<img width="500" alt="image" src="https://github.com/affableashish/angular-dotnet-realworld/assets/30603497/df24558b-477d-4146-933d-ef7e9ce20dfc">

If it asks you to allow angular cli to autocomplete commands, choose Y which will write this to your `.bash_profile`:

<img width="400" alt="image" src="https://github.com/affableashish/angular-dotnet-realworld/assets/30603497/70f6a3d1-79fb-4cf8-a529-780421099368">

# Setting up your IDE
I'm using Jetbrains Rider. It already comes with the features present in WebStorm so I don't have to use a separate IDE for doing full stack work.

<img width="650" alt="image" src="https://github.com/affableashish/angular-dotnet-realworld/assets/30603497/f99a9814-0ef9-4f9e-aa39-68be1aeebb7a">

[Reference](https://www.jetbrains.com/rider/features/)

## Settings in your Jetbrains IDE Rider
1. Show memory
   
   <img width="650" alt="image" src="https://github.com/affableashish/angular-dotnet-realworld/assets/30603497/a3d99d4b-542c-4860-a460-f30b81fd3c9f">

   The memory shows up in the bottom right corner. You can force GC to kick in when your IDE starts getting slow.

   <img width="200" alt="image" src="https://github.com/affableashish/angular-dotnet-realworld/assets/30603497/cb655f07-317e-441a-88c1-8c2f820ee019">

## Plugins in your Jetbrains IDE Rider
### Preetier
[Reference](https://prettier.io/docs/en/webstorm)

Standard for working with JS TS projects.

It already comes bundled with it

<img width="600" alt="image" src="https://github.com/affableashish/angular-dotnet-realworld/assets/30603497/7fe063f4-734c-4b65-a15d-b8ab81f2da3e">

To use it, you have to install it as a dev dependency on your project
 
```bash
npm install --save-dev --save-exact prettier
```

This way everyone who works on this project use the same preetier version and preetier settings


[Reference](https://www.jetbrains.com/help/webstorm/prettier.html#ws_prettier_install)  


### AceJump
### String Manipulation

# Need for Nx
## Monorepos
[Reference](https://monorepo.tools/#understanding-monorepos)

A monorepo is a single repository containing multiple distinct projects, with well-defined relationships.

<img width="450" alt="image" src="https://github.com/affableashish/angular-dotnet-realworld/assets/30603497/2a374d20-6776-4e5a-a05e-27c03560e1d4">

A good monorepo is the opposite of monolithic!

<img width="400" alt="image" src="https://github.com/affableashish/angular-dotnet-realworld/assets/30603497/c173e48b-1df5-43e6-b695-3bfb484af9c3">

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
