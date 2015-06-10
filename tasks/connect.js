// start file-servers for your files
// https://github.com/gruntjs/grunt-contrib-connect
module.exports = function( grunt ){
    return {
        dev: {
            options: {
                port: 2000,
                    base: '<%= options.src %>',
                    keepalive: true,
                    hostname: '*'
            }
        },
        deploy: {
            options: {
                port: 2001,
                    base: '<%= options.deploy %>',
                    keepalive: true,
                    hostname: '*'
            }
        }
    };
};
