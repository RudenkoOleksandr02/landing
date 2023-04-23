let gulp = require('gulp');
let concat = require('gulp-concat');
let {src, dest, watch} = gulp;
let styles = [
	'directory/*/*.css',
	'directory/*/*/*.css',
	'directory/*/*/*/*.css',
	'directory/*/*/*/*/*.css',
	'directory/*/*/*/*/*/*.css'
];
let scripts = [
	'directory/*/*.js',
	'directory/*/*/*.js',
	'directory/*/*/*/*.js',
	'directory/*/*/*/*/*.js',
	'directory/*/*/*/*/*/*.js'
];

function taskCSS(cb) {
	return (src(styles))
		.pipe(concat('build.css'))
		.pipe(dest('assets/dist'));
}
function taskJS(cb) {
	return (src(scripts))
		.pipe(concat('build.js'))
		.pipe(dest('assets/dist')); 
}
exports.default = () => {
	watch(styles, taskCSS);
	watch(scripts, taskJS);
}