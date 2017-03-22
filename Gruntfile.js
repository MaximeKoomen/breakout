module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

			concat: {
				js: {
					src: ['js/breakout.js'],
					dest:'build/js/script.js',
				},
				css: {
					src: ['sass/style.scss'],
					dest:'build/css/style.css',
				},
			},

			watch: {
				js: {
					files:['js/*.js'],
					tasks:['concat:js'],
				},
				css: {
					files:['sass/*.scss'],
					tasks:['concat:css'],
				},
			},

			uglify: {
				compress: {
					files: {
							'build/js/script.js' : 'js/breakout.js'
						},
						options: {
							mangle: false
					},
				},
			},

			sass: {
				dist: {
					files: {
							'build/css/style.css' : 'sass/style.scss'
					},
				},
			},
		});

// Load plugins
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-sass');

// Register tasks
grunt.registerTask('default', ['concat', 'watch', 'uglify', 'sass']);
};
