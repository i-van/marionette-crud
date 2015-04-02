
module.exports = function(grunt) {

    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        requirejs: {
            compile: {
                // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
                options: {
                    baseUrl: 'public/javascripts',
                    mainConfigFile: 'public/javascripts/main.js',
                    out: 'public/javascripts/main.build.js',
                    name: 'main',

                    optimize: 'uglify2',
                    // TODO: Figure out how to make sourcemaps work with grunt-usemin
                    // https://github.com/yeoman/grunt-usemin/issues/30
                    //generateSourceMaps: true,
                    // required to support SourceMaps
                    // http://requirejs.org/docs/errors.html#sourcemapcomments
                    preserveLicenseComments: false,
                    useStrict: true,
                    wrap: true,
                    uglify2: {} // https://github.com/mishoo/UglifyJS2
                }
            }
        }
    });

    grunt.registerTask('default', [
        'requirejs'
    ]);
};
