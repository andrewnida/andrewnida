// specifying JSHint options and globals
// http://jshint.org
// https://github.com/gruntjs/grunt-contrib-jshint
module.exports = function( grunt ){
    return {
        all: [
            '<%= options.src %>javascripts/*.js',
            '<%= options.src %>javascripts/**/*.js',
            //ignore vendor libraries
            '!<%= options.src %>javascripts/templates.js',
            '!<%= options.src %>javascripts/vendor/*.js',
            '!<%= options.src %>javascripts/vendor/**/*.js'
        ],
        options: {
            camelcase: false, //force all variable names to either cameCalse or UPPER_CASE
            curly: false, //use curly braces even on one-liners
            eqeqeq: true, //use strict equality (===, !==)
            immed: true, //wrap self-invoking functions in parentheses
            newcap: true, //capitalize first letter of all constructor functions (i.e. new MyObject())
            noarg: true, //prohibit the use of arguments.caller & arguments.callee (which are forbidden in strict mode of es5+)
            sub: true, //supress warnings for using brace syntax instead of dot syntax on objects
            undef: true, //prohibit the use of undeclared variables (spot leaks + globals)
            eqnull: true, //suppress warnings about using "== null"
            browser: true, //define globals exposed by modern browsers
            maxlen: 150, //generously allowing 150 characters per line, try to stick to standard gutter of 80
            unused: true,
            globals: {
            module: true, //commonjs global
                define: true, //AMD global
                require: true, //AMD + CommonJS global
                requirejs: true, // AMD global
                console: true //turn this to false when supporting real-old browsers
            }
        }
    };
};
