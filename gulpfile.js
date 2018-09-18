'use strict';

var gulp           = require('gulp'),
    gulpsync       = require('gulp-sync')(gulp),
    del            = require('del'),
    vinylPaths     = require('vinyl-paths'),
    sass           = require('gulp-sass'),
    sourcemaps     = require('gulp-sourcemaps'),
    uglify         = require('gulp-uglify'),
    concat         = require('gulp-concat'),
    copy           = require('gulp-contrib-copy'),
    preprocess     = require('gulp-preprocess'),
    watch          = require('gulp-watch'),
    browserSync    = require('browser-sync'),
    imagemin       = require('gulp-imagemin'),
    pngquant       = require('imagemin-pngquant'),
    plumber        = require("gulp-plumber"),
    pug            = require("gulp-pug"),
    autoprefixer   = require('gulp-autoprefixer'),
    notify         = require("gulp-notify"),
    debug          = require("gulp-debug"),
    gulpRemoveHtml = require("gulp-remove-html");

// Paths:
var path = {
        build: {
        root     : 'build/',
        html     : 'build/*.html',
        js       : 'build/js/',
        css      : 'build/css/',
        img      : 'build/img/',
        fonts    : 'build/fonts/'
    },
    src: {
        root   : 'src/',
        pug    : 'src/pug/*.pug',
        sass   : 'src/styles/main.sass',
        css    : 'src/styles/',
        lib    : 'src/lib/**/*.js',
        js     : 'src/js/**/*.js',
        scripts: 'src/scripts/**/*.js',
        img    : 'src/img/**/*.*',
        fonts  : 'src/fonts/**/*', 
        php    : 'src/php/**/*'
    },
    watch: {
        html: 'src/html/**/*.html',
        pug:  'src/pug/**/*.pug',
        sass: 'src/styles/**/*.sass',
        js:   'src/js/**/*.js',
        tpl:  'src/tpl/**/*.html'
    },
    clean: ['build', 'src/styles/main.css', 'src/*.html', 'src/pugToHTML']
};

// Initialize Local Server
var webserver = {
    dev: {
        server: {
            baseDir: './src'
        },
        notify: false,
        tunnel: true,
        host: 'localhost',
        port: 9011,
        logPrefix: 'app_dev'
    },
    prod: {
        server: {
            baseDir: './build'
        },
        notify: false,
        tunnel: true,
        host: 'localhost',
        port: 9012,
        logPrefix: 'app_prod'
    }
};


// del task
gulp.task('del', function () {
    return gulp.src(path.clean)
      .pipe(vinylPaths(del));
    //   .pipe(gulp.dest('dist'));
  });

// Pug to HTML
// development:
gulp.task('pug:dev', function () {
    return gulp.src(path.src.pug)
    .pipe(debug({title: 'src'}))
    .pipe(plumber())
    .pipe(pug({pretty: true}).on("error", notify.onError()))
    .pipe(gulp.dest(path.src.root))
    .pipe(browserSync.reload({stream: true}));
});
// remove useless scripts from HTML:
gulp.task('deject', function () {
        return gulp.src(path.build.html)
            .pipe(gulpRemoveHtml())
            .pipe(gulp.dest(path.build.root))
});
// production:
gulp.task('pug:prod', function () {
    return gulp.src(path.src.pug)
        .pipe(gulpRemoveHtml().on("error", notify.onError()))
        .pipe(pug().on("error", notify.onError()))
        .pipe(gulp.dest(path.build.root));
});

// Препроцессинг html
// development
// gulp.task('html:dev', function() {
//     gulp.src(path.src.html)
//         .pipe(preprocess({context: {NODE_ENV: 'dev', DEBUG: true}}))
//         .pipe(gulp.dest(path.src.root))
//         .pipe(browserSync.reload({stream: true}));
// });
// // production
// gulp.task('html:prod', function() {
//     gulp.src(path.src.html)
//         .pipe(preprocess({context: {NODE_ENV: 'prod', DEBUG: true}}))
//         .pipe(gulp.dest(path.build.root))
// });

// Sass
// development
gulp.task('sass:dev', function() {
    return gulp.src(path.src.sass)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", notify.onError()))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.src.css))
        .pipe(browserSync.reload({stream: true}));
});
// production
gulp.task('sass:prod', function() {
    return gulp.src(path.src.sass)
        .pipe(sass({outputStyle: 'compressed'}).on("error", notify.onError()))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest(path.build.css));
});

// Копирование шрифтов и php для production
gulp.task('copy:miscellaneous', function() {
    gulp.src(path.src.fonts)
        .pipe(copy())
        .pipe(gulp.dest(path.build.fonts));
    gulp.src(path.src.php)
        .pipe(copy())
        .pipe(gulp.dest(path.build.root));
});

// Images optimize
gulp.task('img', function () {
    gulp.src(path.src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img));
});

// Concatenate all the JS-files for Production
// Folders to contat: lib, js, scripts
gulp.task('scripts', function() {
    return gulp.src([path.src.lib, path.src.js, path.src.scripts])
        .pipe(concat('scripts.js'))
        // .pipe(uglify())
        .pipe(gulp.dest(path.build.js));
});

// watch
gulp.task('watch', function(){
    watch([path.watch.pug], function(event, cb) {
        gulp.start('pug:dev');
    });
    watch([path.watch.sass], function(event, cb) {
        gulp.start('sass:dev');
    });
    watch([path.watch.js, path.watch.tpl]).on('change', browserSync.reload);
});

// Starting local server
// development
gulp.task('webserver:dev', function () {
    browserSync(webserver.dev);
});
// production
gulp.task('webserver:prod', function () {
    browserSync(webserver.prod);
});

// Режим разработки
gulp.task('dev', gulpsync.sync([
    'del',
    [
        'pug:dev',
        'sass:dev'
    ],
    'watch',
    'webserver:dev'
]));

// Режим production
gulp.task('prod', gulpsync.sync([
    'del',
    [
        'pug:prod',
        'sass:prod',
        'copy:miscellaneous',
        'img',
        'scripts'
    ],
    'deject'
]));

gulp.task('default', ['dev']);