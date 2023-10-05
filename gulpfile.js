const { src, dest, series, watch } = require('gulp');
const concat = require('gulp-concat');
const htmlMin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const svgSprite = require('gulp-svg-sprite');
const image = require('gulp-image');
const svgMin = require('gulp-svgmin');
const babel = require('gulp-babel');
const notify = require('gulp-notify');
const uglify = require('gulp-uglify-es').default;
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const mode = require('gulp-mode')();
const browserSync = require('browser-sync').create();

const clean = () => {
  return del(['dist'])
};

const styles = () => {
  return src('sources/css/**/*.css')
    .pipe((mode.development(sourcemaps.init())))
    .pipe(concat('main.css'))
    .pipe(autoprefixer({
      cascade: false,
    }))
    .pipe((mode.production(cleanCss({
      level: 2,
    }))))
    .pipe((mode.development(sourcemaps.write())))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
};

const htmlMinify = () => {
  return src('sources/**/*.html')
    .pipe((mode.production(htmlMin({
      collapseWhitespace: true,
    }))))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
};

const svgSprites = () => {
  return src('sources/img/**/*.svg')
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: '../sprite.svg',
        },
      }
    }))
    .pipe(dest('dist/img'))
};

const scripts = () => {
  return src([
    'sources/js/components/**/*.js',
    'sources/js/main.js'
  ])
    .pipe((mode.development(sourcemaps.init())))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('app.js'))
    .pipe(mode.production(uglify({
      toplevel: true,
    })).on('error', notify.onError()))
    .pipe((mode.development(sourcemaps.write())))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
};

// !! add separated scipt files while necessary

const images = () => {
  return src([
    'sources/img/**/*.png',
    'sources/img/**/*.jpg',
    'sources/img/**/*.jpeg'
  ])
    .pipe(image())
    .pipe(dest('dist/img'))
}

const svgmin = () => {
  return src('sources/img/*.svg')
    .pipe(svgMin())
    .pipe(dest('dist/img'))
}

const fonts = () => {
  return src([
    'sources/fonts/**/*.woff2',
    'sources/fonts/**/*.woff'
  ])
    .pipe((mode.development(sourcemaps.init())))
    .pipe((mode.development(sourcemaps.write())))
    .pipe(dest('dist/fonts'))
    .pipe(browserSync.stream())
};

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: 'dist',
    }
  })
};

watch('sources/**/*.html', htmlMinify);
watch('sources/css/**/*.css', styles);
watch('sources/img/svg/**/*.svg', svgSprites);
watch('sources/img/**/*.png', images);
watch('sources/img/**/*.jpg', images);
watch('sources/img/**/*.jpeg', images);
watch('sources/img/*.svg', images);
watch('sources/js/**/*.js', scripts);
watch('sources/fonts/**/*.woff2', fonts);
watch('sources/fonts/**/*.woff', fonts);

exports.styles = styles;
exports.scripts = scripts;
exports.htmlMinify = htmlMinify;
exports.default = series(clean, fonts, htmlMinify, scripts, styles, images, svgmin, svgSprites, watchFiles);
