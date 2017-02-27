// Dependencies
var gulp         = require('gulp');
var sass         = require('gulp-sass');
var notify       = require('gulp-notify');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var concat       = require('gulp-concat');
var rename       = require('gulp-rename');
var uglify       = require('gulp-uglify');
var saveLicense  = require('uglify-save-license');
var modernizr    = require('gulp-modernizr');


// Path Configs
var config = {
  verPath:  './g/3',
  sassPath: './sass',
  jsPath:   './javascripts',
  cssPath:  './g/3/c',
  npmPath:  './node_modules'
}

/**
 * Sass Configurations
 *
 * Dev and Prod configuration profiles for sass
 *
 **/

// Production
var sassOptions = {
  outputStyle: 'compressed',
  sourceComments: false,
  includePaths: [
      config.sassPath,
      config.npmPath + '/bootstrap-sass/assets/stylesheets',
      config.npmPath + '/bourbon/app/assets/stylesheets',
      config.npmPath + '/bootstrap-accessibility-plugin/plugins/css'
  ],
}

//Dev
var sassDevOptions = {
  outputStyle: 'nested',
  sourceComments: true,
  includePaths: [
      config.sassPath,
      config.npmPath + '/bootstrap-sass/assets/stylesheets',
      config.npmPath + '/bourbon/app/assets/stylesheets',
      config.npmPath + '/bootstrap-accessibility-plugin/plugins/css'
  ],
}

/**
 * Uglify Options
 *
 * Tell uglify to keep certiain comments, etc
 *
 **/
var uglifyOptions = {
  output: {
    comments: saveLicense
  }
}

/**
 * Sass Compilers
 *
 * Dev and Prod compilers
 *
 **/

gulp.task('sass-dev', function() {
  return gulp
      .src(config.sassPath + '/g.scss')
      .pipe(sourcemaps.init())
      .pipe(sass(sassDevOptions).on('error', notify.onError(function (error) {
          return "Error: " + error.message;
      })))
      .pipe(sourcemaps.write())
      .pipe(autoprefixer())
      .pipe(gulp.dest(config.cssPath));
});

gulp.task('sass', function() {
  return gulp
      .src(config.sassPath + '/g.scss')
      .pipe(sass(sassOptions).on('error', notify.onError(function (error) {
          return "Error: " + error.message;
      })))
      .pipe(autoprefixer())
      .pipe(gulp.dest(config.cssPath));
});

/**
 * Processes to move and concat Fonts
 *
 **/

// Move fonts
gulp.task('bootstrap-fonts', function() {
  return gulp
    .src( config.npmPath + '/bootstrap-sass/assets/fonts/bootstrap/**.*' )
    .pipe(gulp.dest( config.verPath + '/f' ))

});

/**
 * Processes to move and concat Scripts (dev alternates)
 *
 **/

// Build Modernizr (dev)
gulp.task('modernizr-dev', function() {
  return gulp
    .src([
      './javascripts/**.js',
      './sass/**.scss'
    ])
    .pipe(modernizr('ghead.js', {
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
    }))
    .pipe(gulp.dest(config.verPath + '/j'));
});


// Concat and move globals footer scripts for dev
gulp.task('globals-footer-scripts-dev', function() {
  return gulp
    .src([
      config.npmPath + '/noisy/jquery/jquery.noisy.js',
      config.jsPath + '/noisy-calls.js',
      config.npmPath + '/bootstrap-accessibility-plugin/plugins/js/bootstrap-accessibility.js'
    ])
    .pipe(concat('g.js'))
    .pipe(gulp.dest(config.verPath + '/j'));
});

/**
 * Processes to move and concat Scripts
 *
 **/

// Move bootstrap scripts
gulp.task('bootstrap-scripts', function() {
  return gulp
    .src( config.npmPath + '/bootstrap-sass/assets/javascripts/bootstrap.min.js' )
    .pipe(gulp.dest( config.verPath + '/j' ));
});

// Build Modernizr
gulp.task('modernizr', function() {
  return gulp
    .src([
      './javascripts/**.js',
      './sass/**.scss'
    ])
    .pipe(modernizr('ghead.js', {
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
    }))
    .pipe(uglify(uglifyOptions))
    .pipe(gulp.dest(config.verPath + '/j'));
});

// Move respond.js
gulp.task('respondjs', function() {
  return gulp
    .src( config.npmPath + '/Respond.js/dest/respond.min.js' )
    .pipe(rename('respond.js'))
    .pipe(gulp.dest( config.verPath + '/j' ));
});

// Concat and move globals footer scripts
gulp.task('globals-footer-scripts', function() {
  return gulp
    .src([
      config.npmPath + '/noisy/jquery/jquery.noisy.js',
      config.jsPath + '/noisy-calls.js',
      config.npmPath + '/bootstrap-accessibility-plugin/plugins/js/bootstrap-accessibility.js'
    ])
    .pipe(concat('g.js'))
    .pipe(uglify(uglifyOptions))
    .pipe(gulp.dest(config.verPath + '/j'));
});




// Watch function (sass) - dev use only
gulp.task('watch',function() {
  gulp
    .watch(config.sassPath + '/**/*.scss', ['sass-dev']);
});


// Dev - full dev build
gulp.task('dev', [
            'sass-dev',
            'bootstrap-fonts',
            'bootstrap-scripts',
            'modernizr-dev',
            'respondjs',
            'globals-footer-scripts-dev',
          ]);

// Default - full production build
gulp.task('default', [
            'sass',
            'bootstrap-fonts',
            'bootstrap-scripts',
            'modernizr',
            'respondjs',
            'globals-footer-scripts',
          ]);
