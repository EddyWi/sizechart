'use strict';
Handlebars.registerHelper({
    'loopArr': function(context, options) {
        var buffer = '';
        var i = -1;
        var j = context.length;
        if (_.isArray(context)) {
            while (++i < j) {
                buffer += options.fn(context[i]);
            }
            return buffer;
        } else {
            return options.fn(context);
        }
    },
    'debug': function(value) {
        console.log('=================================');
        console.log('Context: ', this);
        if (!_.isUndefined(value)) {
            console.log('Value: ', value);
        }
        return console.log('=================================');
    }
});