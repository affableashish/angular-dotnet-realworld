# angular-dotnet-realworld
Use Angular 17 and .NET 8 to create a medium.com clone.

# Helpful Links
1. [Full stack web dev in Rider](https://www.jetbrains.com/guide/dotnet/tips/full-stack-web-development-with-rider/)
2. gothinkster demo [app](https://github.com/gothinkster/angular-realworld-example-app)
3. Jason Watmore's [Angular series](https://jasonwatmore.com/angular-15-free-course-1-create-base-project-structure)
4. Angular [official docs](https://angular.dev/tutorials)
5. Josh Morony's [Angular course](https://angularstart.com/)
6. Envato Tuts+'s [Angular tutorial](https://youtu.be/JWhRMyyF7nc?si=3mllCIMx1v5PTJZw)

# Install Node
Node.js is a JavaScript-based environment which you can use to create web-servers and networked applications. You can also use it to perform helpful tasks on your computer such as concatenating and minifying JavaScript files and compiling Sass files into CSS.

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

## Install latest node
```bash
brew install node
```

Later when you want to uninstall node, you can simply do this
```bash
brew uninstall node
```



