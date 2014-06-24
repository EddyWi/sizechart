### Size-chart

Re-work of the current [size-chart](http://www.freepeople.com/size-chart).

Composed of standalone modules, including tab based layout and crosshairs.

The data is modeled inside the ```data.json``` file and displayed in a handlebars
based view.

### Todo

- [x] Mobile Version
- [ ] Refactor SCSS maybe include some fixins
- [x] Look into issues/questions [1](https://github.com/freepeople/sizechart/issues/1) and [2](https://github.com/freepeople/sizechart/issues/2)
- [x] Test Browsers
- [x] Apply answered issues to size-chart
- [x] Refactored Dropdown


#### Handlebars View
The Handlebars views are pre-compiled to promote minimal footprint.

All that is needed is the runtime libary and not the full handlebars library.

The below url would suffice since the version of runtime has to
match the compiler version:
```javascript
//cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.3.0/handlebars.runtime.js
```

The gulp build commands for Handlebars is as followed:

``` gulp hbs ``` for one time and ```gulp watch-hbs``` for continual compiling
on file change


The size-chart is available for internal preview
[**here**](http://goo.gl/QQvMoJ)
