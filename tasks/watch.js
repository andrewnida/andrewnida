// watch your files for changes
// https://github.com/gruntjs/grunt-contrib-watch
module.exports = function( grunt ){
    return {
    	views: {
            files: [ 'views/*', 'views/**/*', 'locals.json' ],
                tasks: [ 'jade:dev', 'jade:client' ]
        },
        stylesheets: {
        	files: [ 'sass/**/*.{scss,sass}' ],
            tasks: 'compass:dev'
        },
        hint: {
            files: [ '<%= options.src %>javascripts/**/*.js' ],
                tasks: 'jshint'
        }
    };
};
