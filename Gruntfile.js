'use strict';

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jasmine-node-coverage');

    var userConfig = require( './grunt.settings.js' );
    userConfig.pkg = grunt.file.readJSON('package.json');


    var taskConfig = require( './grunt.tasks.js' );
    grunt.initConfig( grunt.util._.extend( taskConfig, userConfig ) );
};
