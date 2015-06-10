// compile .scss/.sass to .css using Compass
// http://compass-style.org/help/tutorials/configuration-reference/#configuration-properties
// https://github.com/gruntjs/grunt-contrib-compass
module.exports = function( grunt ){
    return {
        options: {
            sassDir: 'sass',
            httpImagesPath: '<%= options.staticUrl %>images',
            httpGeneratedImagesPath: '<%= options.staticUrl %>images/generated',
            httpFontsPath: '<%= options.staticUrl %>fonts',
            relativeAssets: true,
            assetCacheBuster: false
        },
        dev: {
            options: {
                debugInfo: true,
                cssDir: '<%= options.src %>stylesheets',
                fontsDir: '<%= options.src %>fonts',
                imagesDir: '<%= options.src %>images'
            }
        },
        deploy: {
            options: {
                fontsDir: '<%= options.deploy %>fonts',
                imagesDir: '<%= options.deploy %>images',
                cssDir: '<%= options.deploy %>stylesheets',
                outputStyle: 'compressed',
                noLineComments: true
            }
        }
    };
};