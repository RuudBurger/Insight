// Configuration for Watch task(s)
// Runs specified tasks when file changes are detected
'use strict';


var taskConfig = function (grunt) {

	var config = {
		configFiles: {
			files: [
				'Gruntfile.js',
				'grunt/**/*.js',
				'*.json'
			],
			options: {
				reload: true,
				interrupt: true
			},
			tasks: [
				'wiredep',
				'serve:nowatch'
			]
		},
		sass: {
			files: ['<%= yeogurt.client %>/styles/**/*.{scss,sass}'],
			tasks: [
				'injector:sass',
				'sass:server',
				'autoprefixer:server'
			]
		},
		injectCss: {
			files: [
				'<%= yeogurt.client %>/styles/**/*.css'
			],
			tasks: [
				'injector:css',
				'autoprefixer:server'
			]
		},
		js: {
			files: [
				'<%= yeogurt.client %>/scripts/**/*.js'
			],
			tasks: [
				'newer:eslint'
			]
		},
		livereload: {
			options: {
				livereload: '<%= connect.options.livereload %>'
			},
			files: [
				'<%= yeogurt.client %>/*.{ico,png,txt}',
				'<%= yeogurt.client %>/**/*.html',
				'<%= yeogurt.tmp %>/styles/**/*.{css,ttf,otf,woff,svg,eot}',
				'<%= yeogurt.tmp %>/scripts/**/*.js',
				'<%= yeogurt.tmp %>/templates/**/*.js',
				'<%= yeogurt.client %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
			]
		}
	};


	grunt.config.set('watch', config);

};

module.exports = taskConfig;
