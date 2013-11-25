module.exports = function(config) {
	config.set({
		basePath: '.',
		browsers: ['PhantomJS'],
		frameworks: ['jasmine'],
		singleRun: true,
		autoWatch: false,
		logLevel:  config.LOG_DEBUG,
		captureTimeout: 5000,
		files: [
			'test/*.js'
		],
		plugins: [
			'karma-jasmine',
			'karma-phantomjs-launcher'
		]
	});
};
