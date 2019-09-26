// Dependencies
var gulp         = require('gulp');
    sass         = require('gulp-sass');
    notify       = require('gulp-notify');
    sourcemaps   = require('gulp-sourcemaps');
    autoprefixer = require('gulp-autoprefixer');
    concat       = require('gulp-concat');
    rename       = require('gulp-rename');
    uglify       = require('gulp-uglify');
    saveLicense  = require('uglify-save-license');
    modernizr    = require('gulp-modernizr');


// Path Configs
var config = {
  verPath:  '../../g/4',
  sassPath: './sass',
  jsPath:   './javascripts',
  cssPath:  '../../g/4/c',
  npmPath:  '../../node_modules'
}

/**
 * Sass Option Configurations
 *
 * Dev and Prod configuration profiles for sass
 *
 **/

/**
 * Production Sass Configuration
 *
 **/
var sassOptions = {
  outputStyle: 'compressed',
  sourceComments: false,
  includePaths: [
      config.sassPath,
      config.npmPath + '/bootstrap/scss',
  ],
  precision: 10
}

/**
 * Dev Sass Configuration
 *
 **/
var sassDevOptions = {
  outputStyle: 'nested',
  sourceComments: true,
  includePaths: [
    config.sassPath,
    config.npmPath + '/bootstrap/scss',
    config.npmPath + '/@fortawesome/fontawesome-free/scss',
  ],
  precision: 10
}

/**
 * Uglify Options
 *
 * Tell uglify to keep needed comments, etc
 *
 **/
var uglifyOptions = {
  output: {
    comments: saveLicense
  }
}

/**
 * Modernizr Settings
 */
var modernizrOptions = {
  "tests": [
    "displaytable",
    "flexbox",
    "flexboxlegacy",
    "flexboxtweener",
    "flexwrap",
    "fontface"
  ],
  "options": [
    "testStyles",
    "html5shiv",
    "setClasses"
  ],
}

/**
 * Sass Compilers
 *
 * Dev and Prod compilers
 *
 **/

/**
 * SASS Compiler - Dev Settings
 * 
 * Uses Gulp 4.x syntax
 */
function sassDev() {
  return gulp
      .src(config.sassPath + '/g.scss')
      .pipe(sourcemaps.init())
      .pipe(sass(sassDevOptions).on('error', notify.onError(function (error) {
          return "Error: " + error.message;
      })))
      .pipe(autoprefixer())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.cssPath));
}

/**
 * SASS Compiler - Production Settings
 * 
 * Uses Gulp 4.x syntax
 */
function sassProd() {
  return gulp
      .src(config.sassPath + '/g.scss')
      .pipe(sass(sassOptions).on('error', notify.onError(function (error) {
          return "Error: " + error.message;
      })))
      .pipe(autoprefixer())
      .pipe(gulp.dest(config.cssPath));

}

/**
 * Processes to move and concat Fonts
 **/
function faFonts() {
  return gulp
    .src( config.npmPath + '/@fortawesome/fontawesome-free/webfonts/**.*' )
    .pipe(gulp.dest( config.verPath + '/f' ));
}

/**
 * Build Dev Modernizr Scripts
 */
function modernizrDev() {
  return gulp
    .src([
      config.jsPath + '/**.js',
      config.npmPath + '/**.scss'
    ])
    .pipe(modernizr('ghead.js', modernizrOptions))
    .pipe(gulp.dest(config.verPath + '/j'));
}

/**
 * Build Production Modernizr Scripts
 */
function modernizrProd() {
  return gulp
    .src([
      config.jsPath + '/**.js',
      config.npmPath + '/**.scss'
    ])
    .pipe(modernizr('ghead.js', modernizrOptions))
    .pipe(uglify(uglifyOptions))
    .pipe(gulp.dest(config.verPath + '/j'));
}

/**
 * Processes to move and concat Scripts (dev alternates)
 **/
function globalsFooterScriptsDev() {
  return gulp
    .src([
      config.jsPath + '/jquery.swiftype.autocomplete.js',
      config.jsPath + '/custom.js'
    ])
    .pipe(concat('g.js'))
    .pipe(gulp.dest(config.verPath + '/j'));
}

/**
 * Processes to move and concat Scripts
 **/
function bootstrapScripts() {
  return gulp
    .src( config.npmPath + '/bootstrap/dist/js/bootstrap.bundle.js' )
    .pipe(gulp.dest( config.verPath + '/j' ));
}

/**
 * Process and Concat Globals Footer Scripts (Legacy)
 */
function globalsFooterScripts() {
  return gulp
    .src([
      config.jsPath + '/jquery.swiftype.autocomplete.js',
      config.jsPath + '/custom.js'
    ])
    .pipe(concat('g.js'))
    .pipe(uglify(uglifyOptions))
    .pipe(gulp.dest(config.verPath + '/j'));
}


/**
 * Process and Concat Globals Full Header Scripts
 */
function headerScriptsFull() {
  return gulp
    .src([
      config.verPath + '/j/ghead.js',
      config.jsPath + '/jquery.swiftype.autocomplete.js',
    ])
    .pipe(concat('ghead-full.js'))
    .pipe(gulp.dest(config.verPath + '/j'));
}

/**
 * Process and Concat Globals Full Footer Scripts
 */
function footerScriptsFull() {
  return gulp
    .src([
      config.npmPath + '/bootstrap/dist/js/bootstrap.bundle.js',
      config.jsPath + '/custom.js'
    ])
    .pipe(concat('gfoot-full.js'))
    .pipe(gulp.dest(config.verPath + '/j'));
}

/**
 * Minify Header and Footer Full Scripts
 */
function minifyFull() {
  return gulp
    .src([
      config.verPath + '/j/ghead-full.js',
      config.verPath + '/j/gfoot-full.js'
    ])
    .pipe(uglify(uglifyOptions))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(config.verPath + '/j'));
}

/**
 * Watch Scripts and Styles for Changes
 */
function watch() {
  sassDev();
  gulp.series(footerScriptsFull, minifyFull);
  gulp.watch(config.sassPath + '/**/*.scss', sassDev);
  gulp.watch(config.jsPath + '/custom.js', gulp.series(footerScriptsFull, minifyFull));
}

/**
 * Final Build Tools
 */
const dev = gulp.series(
    sassDev,
    faFonts,
    bootstrapScripts,
    modernizrDev,
    headerScriptsFull,
    footerScriptsFull,
    minifyFull,
    globalsFooterScriptsDev
  );

const prod = gulp.series(
    sassProd,
    faFonts,
    bootstrapScripts,
    modernizrProd,
    headerScriptsFull,
    footerScriptsFull,
    minifyFull,
    globalsFooterScripts
  );


exports.dev = dev;
exports.default = prod;
exports.watch = watch;