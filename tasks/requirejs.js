var requireConfigs = require( "../src/javascripts/main" );

// compile requirejs files for production
// http://requirejs.org
// https://github.com/gruntjs/grunt-contrib-requirejs

module.exports = function( grunt ){
    return {
        compile: {
            options: {
                baseUrl: "<%= options.src %>javascripts",
                out: "<%= options.deploy %>javascripts/main-min.js",
                preserveLicenseComments: false,
                name: "main",
                include: "../../node_modules/almond/almond",
                pragmasOnSave: {},
                paths: requireConfigs.paths,
                shim: requireConfigs.shim
            }
        }
    };
};
