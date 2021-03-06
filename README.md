<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/theunreal/ngx-basicscroll/master/demo/src/assets/logo.svg">
</p>

# ngx-basicscroll - Angular wrapper to [basicScroll](https://github.com/electerious/basicScroll)

[![npm version](https://badge.fury.io/js/ngx-basicscroll.svg)](https://badge.fury.io/js/ngx-basicscroll),
[![Build Status](https://travis-ci.org/theunreal/ngx-basicscroll.svg?branch=master)](https://travis-ci.org/theunreal/ngx-basicscroll)
[![Coverage Status](https://coveralls.io/repos/github/theunreal/ngx-basicscroll/badge.svg?branch=master)](https://coveralls.io/github/theunreal/ngx-basicscroll?branch=master)
[![dependency Status](https://david-dm.org/theunreal/ngx-basicscroll/status.svg)](https://david-dm.org/theunreal/ngx-basicscroll)
[![devDependency Status](https://david-dm.org/theunreal/ngx-basicscroll/dev-status.svg?branch=master)](https://david-dm.org/theunreal/ngx-basicscroll#info=devDependencies)
[
## Demo

View all the directives in action at https://theunreal.github.io/ngx-basicscroll

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `ngx-basicscroll` via:
```shell
npm install --save basicscroll ngx-basicscroll
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
import { BasicScrollModule } from 'ngx-basicscroll';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` BasicScrollModule .forRoot()`):
```js
import { BasicScrollModule } from 'ngx-basicscroll';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [BasicScrollModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` BasicScrollModule `:

```js
import { BasicScrollModule } from 'ngx-basicscroll';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [BasicScrollModule, ...], 
})
export class OtherModule {
}
```

## Usage

<a href="https://theunreal.github.io/ngx-basicscroll/home" target="_blank"><b>View in Demo</b></a>

```js
<bs-element [options]="bsOptions" class="box easeBox">1</bs-element>
```

### Example of bsOptions:
```js
  {
    from: 'middle-bottom',
    to: 'bottom-top',
    direct: true,
    props: {
      '--ty': {
        from: '0',
        to: '100px',
        timing: 'circIn'
      }
    }
  }
```

### Example SCSS:
```css
.box {
  padding: 1em 2em;
  margin: 0 .5em;
  background: #ddd;
  will-change: transform;
}

.easeBox { transform: translateY(var(--ty)); }
```


## License

Copyright (c) 2018 Eliran Elnasi. Licensed under the MIT License (MIT)

