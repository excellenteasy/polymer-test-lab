'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    watch: {
      options: {
        livereload: '<%= connect.options.livereload %>'
      },
      html: {
        files: ['index.html', 'elements/{*,}/*.html']
      },
      css: {
        files: ['main.css']
      }
    },
    connect: {
      options: {
        port: 9898,
        hostname: '0.0.0.0',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: ['.']
        }
      }
    }
  });

  grunt.registerTask('default', ['connect', 'watch']);
}