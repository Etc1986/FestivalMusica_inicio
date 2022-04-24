const {src, dest, watch} = require('gulp');
const gulpPlumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber')

function css(done) {
 //identificar el archivo SCSS a compilar
	src('src/scss/**/*.scss')
		.pipe(plumber())
//compilarlo
		.pipe(sass()) 
//almacenarlo
	  .pipe(dest('build/css'))
	done();
}

function dev(done) {
	watch('src/scss/**/*.scss',css);	
	done();
}

exports.css = css;
exports.dev = dev;
