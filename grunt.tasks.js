'use strict';

module.exports = {
    watch: {
        jssrc: {
            files: ['<%= app_files.js %>'],
            tasks: [ 'jshint:src']
        },

        jsTest: {
            files: ['<%= app_files.jsunit %>'],
            tasks: ['jshint:src', 'karma']
        }
    },
    jshint: {
        src: {
            src: ['<%= app_files.js %>'],
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            }
        },
        test: {
            src: ['<%= app_files.jsunit %>'],
            options: {
                jshintrc: 'test/.jshintrc',
                reporter: require('jshint-stylish')
            }
        },
        grunt: {
            src: ['Gruntfile.js', 'grunt.settings.js', 'grunt.tasks.js'],
            options: {
                node: true,
                esnext: true,
                bitwise: true,
                camelcase: false,
                curly: true,
                eqeqeq: true,
                immed: true,
                indent: 4,
                latedef: true,
                newcap: true,
                noarg: true,
                quotmark: 'single',
                regexp: true,
                undef: true,
                strict: true,
                trailing: true,
                smarttabs: true,
                globals: {}
            }
        }
    },
    jasmine_node: {
        coverage: {
        },
        options: {
            forceExit: true,
            match: '.',
            matchall: false,
            extensions: 'js',
            specNameMatcher: 'spec',
            captureExceptions: true,
            junitreport: {
                report: false,
                savePath : './build/reports/jasmine/',
                useDotNotation: true,
                consolidate: true
            }
        }
    }
};
