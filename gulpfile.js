var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	concatCss = require('gulp-concat-css');


function css_style(done) {
	gulp.src('styles/site.css')
		.pipe(concatCss("site.css"))
		.pipe(gulp.dest('build/css'))
		.pipe(browserSync.stream())
	done();
}

function sync(done) {
	browserSync.init({
		server: {
			baseDir: "./"
		},
		port: 3000
	})
}

function browserReload(done) {
	browserSync.reload()
}

function watchFile() {
	gulp.watch('styles/**/*.css', css_style);
	gulp.watch('./**/*.html', browserReload);
}

gulp.task('default', gulp.parallel(sync, css_style, watchFile))