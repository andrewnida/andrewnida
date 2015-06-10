module.exports = function( grunt ){
    return {
        build: {
            expand: true,
                cwd: '<%= options.src %>',
                src: [
                'images/**',
                'videos/**',
                'fonts/**',
                'audio/**',
                'favicon.ico',
                'robots.txt'
            ],
            dest: '<%= options.deploy %>'
        }
    };
};