var fs = require( "fs" );
var path = require( "path" );
// use the jade template engine to stay DRY
// http://jade-lang.com
// https://github.com/gruntjs/grunt-contrib-jade
module.exports = function( grunt, options ) {
    /**
     * search for all views/*.jade files and create *.html files for them
     * @param {String} optionsProperty the property from the grunt configs options object to use for the path, i.e. 'src', 'deploy'
     * @param {Array} [includeGlobs] additional globs to include, useful if you have subdirectories of pages
     * return { destination: source }
     */
    var addTemplatePages = function( optionsProperty, includeGlobs ) {
        var files = {};
        includeGlobs = includeGlobs || [];
        includeGlobs.push( 'views/*.jade' );
        includeGlobs.forEach( function( glob ) {
            grunt.file.expand( glob ).forEach( function( f ) {
                files[ '<%= options.' + optionsProperty + ' %>' + f.replace( /views\//,'' ).replace( /jade/, 'html' ) ] = [ f ];
            });
        });
        return files;
    };

    return {
        dev: {
            options: {
                pretty: true,
                basedir: "views",
                //the data for every template is read from a locals module
                data: function( dest, src ){
                    var locals = JSON.parse( fs.readFileSync( path.join( __dirname, '../locals.json' ), 'utf8' ) );
                    locals.staticUrl = options.staticUrl;
                    locals.env = 'development';
                    return locals;
                }
            },
            //every .jade file in views/ becomes an html file (wont look in sub-directors, by default)
            files: addTemplatePages( 'src' )
        },
        deploy: {
            options: {
                pretty: true,
                basedir: "views",
                //the data for every template is read from a locals module
                data: function( dest, src ){
                    var locals = JSON.parse( fs.readFileSync( path.join( __dirname, '../locals.json' ), 'utf8' ) );
                    locals.staticUrl = options.staticUrl;
                    locals.env = 'production';
                    return locals;
                }
            },
            //automated from the pages: option above
            files: addTemplatePages( 'deploy' )
        },
        //these are any client-side templates you choose to have,
        //they become one AMD module at javascripts/templates.js
        client: {
            options: {
                compileDebug: false,
                amd: true,
                //namespace: false,
                processName: function( filename ) {
                    //take out the "views/" path
                    //and the .jade at the end
                    return filename.slice( 0, -( '.jade'.length ) ).slice( 'views/templates/'.length, filename.length );
                },
                client: true
            },
            files: { '<%= options.src %>javascripts/templates.js': [ 'views/templates/**/*.jade' ] }
        },
    };
};
