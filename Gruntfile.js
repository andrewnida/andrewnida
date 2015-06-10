module.exports = function(grunt) {

  //load all of the NPM Tasks out of the package.json
  Object.keys( require( './package.json' ).devDependencies ).forEach( function( dep ) {
    if( dep.match( /grunt-/ ) ) {
      grunt.loadNpmTasks( dep );
    }
  } );

  // Project configuration.
  var config = {
        options: {
            deploy: 'bin/',
            src: 'src/',
            staticUrl: ''
        }
    };

  //apply all of these task-configs to the config object
  'connect jade jshint compass watch requirejs clean copy'.split( ' ' ).forEach( function( task ){
    config[ task ] = require( './tasks/' + task )( grunt, config.options );
  });

  grunt.initConfig( config );

  grunt.registerTask('compile-src', [ 'jshint', 'compass:dev', 'jade:dev' ]);
  grunt.registerTask('compile-deploy', ['clean', 'copy', 'jshint', 'compass:deploy', 'jade:deploy', 'requirejs']);

  //deploy to :production or :development
  grunt.registerTask('build', function(env){
    if (env === undefined) env = '';
    
    if( env.length == 0 || env === 'development' ) {
      grunt.task.run(['compile-src']);
      return;
    } else if ( env === 'production' ) {
      grunt.task.run(['compile-deploy']);
      return;
    } else {
      grunt.log.writeln('You must specify a target, either :development or :production');
    }
  });

  grunt.registerTask('default', ['watch']);
};
