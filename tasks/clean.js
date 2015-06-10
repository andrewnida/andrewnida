// remove and delete all files from a glob
// https://github.com/gruntjs/grunt-contrib-clean
module.exports = function( grunt ){
    return {
    	clean: [ "<%= options.deploy %>images/*", "<%= options.deploy %>images/**/*", "<%= options.deploy %>fonts/*", "<%= options.deploy %>fonts/**/*" ]
    };
};
