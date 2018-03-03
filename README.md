<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/theunreal/ngx-basicscroll/master/demo/src/assets/logo.svg">
</p>

# ngx-basicscroll - Angular wrapper to Basicscroll

[![npm version](https://badge.fury.io/js/ngx-basicscroll.svg)](https://badge.fury.io/js/ngx-basicscroll),
[![Build Status](https://travis-ci.org/theunreal/ngx-basicscroll.svg?branch=master)](https://travis-ci.org/theunreal/ngx-basicscroll)
[![Coverage Status](https://coveralls.io/repos/github/theunreal/ngx-basicscroll/badge.svg?branch=master)](https://coveralls.io/github/theunreal/ngx-basicscroll?branch=master)
[![dependency Status](https://david-dm.org/theunreal/ngx-basicscroll/status.svg)](https://david-dm.org/theunreal/ngx-basicscroll)
[![devDependency Status](https://david-dm.org/theunreal/ngx-basicscroll/dev-status.svg?branch=master)](https://david-dm.org/theunreal/ngx-basicscroll#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/theunreal/ngx-basicscroll.svg)](https://greenkeeper.io/)

## Demo

View all the directives in action at https://theunreal.github.io/ngx-basicscroll

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `ngx-basicscroll` via:
```shell
npm install --save ngx-basicscroll
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `ngx-basicscroll`:
```js
map: {
  'ngx-basicscroll': 'node_modules/ngx-basicscroll/bundles/ngx-basicscroll.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { LibModule } from 'ngx-basicscroll';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from 'ngx-basicscroll';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [LibModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` LibModule `:

```js
import { LibModule } from 'ngx-basicscroll';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2018 Eliran Elnasi. Licensed under the MIT License (MIT)

