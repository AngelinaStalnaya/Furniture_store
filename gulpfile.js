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
  return src('docs/css/**/*.css')
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
  return src('docs/**/*.html')
    .pipe((mode.production(htmlMin({
      collapseWhitespace: true,
    }))))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
};

const svgSprites = () => {
  return src('docs/img/**/*.svg')
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
    'docs/js/**/*.js'
  ])
    .pipe((mode.development(sourcemaps.init())))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(mode.production(uglify({
      toplevel: true,
    })).on('error', notify.onError()))
    .pipe((mode.development(sourcemaps.write())))
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream())
};

// !! add separated scipt files while necessary

const images = () => {
  return src([
    'docs/img/**/*.png',
    'docs/img/**/*.jpg',
    'docs/img/**/*.jpeg'
  ])
    .pipe(image())
    .pipe(dest('dist/img'))
}

const svgmin = () => {
  return src('docs/img/*.svg')
    .pipe(svgMin())
    .pipe(dest('dist/img'))
}

const fonts = () => {
  return src([
    'docs/fonts/**/*.woff2',
    'docs/fonts/**/*.woff'
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

watch('docs/**/*.html', htmlMinify);
watch('docs/css/**/*.css', styles);
watch('docs/img/svg/**/*.svg', svgSprites);
watch('docs/img/**/*.png', images);
watch('docs/img/**/*.jpg', images);
watch('docs/img/**/*.jpeg', images);
watch('docs/img/*.svg', images);
watch('docs/js/**/*.js', scripts);
watch('docs/fonts/**/*.woff2', fonts);
watch('docs/fonts/**/*.woff', fonts);

exports.styles = styles;
exports.scripts = scripts;
exports.htmlMinify = htmlMinify;
exports.default = series(clean, fonts, htmlMinify, scripts, styles, images, svgmin, svgSprites, watchFiles);
