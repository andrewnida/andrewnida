( function(){
    var sharedConfigs = {
        shim: {},
        paths: {
            'runtime': 'vendor/runtime'
        }
    };

    var devConfig = {
        baseUrl: 'javascripts'
    };

    for ( var key in sharedConfigs ) {
        devConfig[ key ] = sharedConfigs[ key ];
    }

    if ( typeof module !== 'undefined' && module.exports ) {
        module.exports = sharedConfigs;
    } else {
        requirejs.config( devConfig );
        require( [ 'app/main' ], function( app ) {
            app();
        } );
    }
} )();
