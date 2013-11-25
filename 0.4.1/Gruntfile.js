'use strict';

module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-karma');

	grunt.initConfig({
		karma: {
			main: {
				configFile: 'karma.conf.js'
			}
		}
	});

	// do nothing
	grunt.registerTask('default', []);

	// do async stuff and fail
	grunt.registerTask('test', ['karma', 'end']);

	// ---------- helpers  ----------

	// print end message
	grunt.registerTask('end', function () {
		grunt.log.writeln('this is the end');
	});

};
