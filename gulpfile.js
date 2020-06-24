var gulp = require('gulp'),
	rename = require('gulp-rename'),
	sourcemaps = require('gulp-sourcemaps'),
	sass = require('gulp-sass'),
	svgSprite = require('gulp-svg-sprite'),
	postcss = require('gulp-postcss'),
	browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');

function css_style(done) {
	gulp.src('styles/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'compressed'})).on('error', sass.logError)
		.pipe(rename({suffix: ".compressed"}))
		.pipe(postcss())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('build/css'))
		.pipe(browserSync.stream());
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

config = {
    mode: {
      css: { // Activate the «css» mode
		bust: false,
		render: {
          scss: true // Activate SCSS output (with default options)
        }
      }
    }
};

function svgs() {
	return gulp.src('images/svg/**/*.svg')
  		.pipe(svgSprite(config))
		.pipe(gulp.dest('build/'))
		.pipe(browserSync.stream());
}

function watchFile() {
	gulp.watch(['styles/**/*.scss', 'build/css/sprite.scss', '.postcssrc.json'], css_style);
	gulp.watch('./**/*.html', browserReload);
	gulp.watch('images/svg/**/*.svg', svgs);
}

gulp.task('default', gulp.series(gulp.series(svgs, css_style), gulp.parallel(sync, watchFile)))