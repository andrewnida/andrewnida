define( [

    "runtime",
    "templates"

    ], function( runtime, templates ) {

    function init() {
        console.log( templates["sample_template"]( {label: 'this is a dynamic label'} ) );
    }

    return init;

} );
