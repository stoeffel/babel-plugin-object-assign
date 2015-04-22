# Object.assign plugin for Babel

Babel plugin that replaces `Object.assign()` with the extends helper.

Useful to reduce the need for additional polyfills or libraries when you want something that extends objects in browsers without native support.

Thanks to @sebmck for the implementation.

## Usage

Instead of using `_.extend(obj1, obj2...)` or `xtend(obj1, obj2...)` just use `Object.assign` in your code and include this plugin for Babel.

Install:

```
$ npm install babel babel-core babel-plugin-object-assign
```

_Note:_ you need to specify `babel-core` as a dependency for your project (not just `babel`). This is also true if you are using a wrapper like `babelify`.

Use:


```
$ babel --plugins object-assign script.js
```

or:

```js
require("babel").transform("code", { plugins: ["object-assign"] });
```

with `browserify` / `babelify`:

```js
var b = browserify({
  // browserifyoptions
}).transform(
  babelify.configure({
    plugins: ["object-assign"]
  })
);
```