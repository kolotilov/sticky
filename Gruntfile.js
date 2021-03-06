module.exports = function (grunt) {
    "use strict";

    var pkg  = grunt.file.readJSON("package.json"),
        date = new Date();

    grunt.initConfig({
        meta: {
            banner: '/*! ' + pkg.name + ' ' + pkg.version + ' | (c) ' + date.getFullYear() + ' ' + pkg.author + ' | ' + pkg.licenses[0].type + ' License */'
        },
        uglify: {
            options: {
                banner: '<%= meta.banner %>\n'
            },
            target: {
                files: {
                    'build/sticky.min.js': ['src/sticky.js']
                }
            }
        },
        watch: {
            js: {
                files: ['src/sticky.js'],
                tasks: ['uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', [ 'uglify', ]);
};
