// node.js Packages / Dependencies
import { task, src as _src, dest, series, watch } from 'gulp';
import sass, { logError } from 'gulp-sass';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import concat from 'gulp-concat';
import cleanCSS from 'gulp-clean-css';
import imageMin, { gifsicle, jpegtran, optipng, svgo } from 'gulp-imagemin';
import pngQuint from 'imagemin-pngquant'; 
const browserSync   = require('browser-sync').create();
import autoprefixer from 'gulp-autoprefixer';
import jpgRecompress from 'imagemin-jpeg-recompress'; 
import clean from 'gulp-clean';


// Paths
var paths = {
    root: { 
        www:        './public_html'
    },
    src: {
        root:       'public_html/assets',
        html:       'public_html/**/*.html',
        css:        'public_html/assets/css/*.css',
        js:         'public_html/assets/js/*.js',
        vendors:    'public_html/assets/vendors/**/*.*',
        imgs:       'public_html/assets/imgs/**/*.+(png|jpg|gif|svg)',
        scss:       'public_html/assets/scss/**/*.scss'
    },
    dist: {
        root:       'public_html/dist',
        css:        'public_html/dist/css',
        js:         'public_html/dist/js',
        imgs:       'public_html/dist/imgs',
        vendors:    'public_html/dist/vendors'
    }
}

// Compile SCSS
task('sass', function() {
    return _src(paths.src.scss)
    .pipe(sass({outputStyle: 'expanded'}).on('error', logError)) 
    .pipe(autoprefixer())
    .pipe(dest(paths.src.root + '/css'))
    .pipe(browserSync.stream());
});

// Minify + Combine CSS
task('css', function() {
    return _src(paths.src.css)
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('leadmark.css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(paths.dist.css))
});

// Minify + Combine JS
task('js', function() {
    return _src(paths.src.js)
    .pipe(uglify())
    .pipe(concat('leadmark.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(paths.dist.js))
    .pipe(browserSync.stream());
});

// Compress (JPEG, PNG, GIF, SVG, JPG)
task('img', function(){
    return _src(paths.src.imgs)
    .pipe(imageMin([
        gifsicle(),
        jpegtran(),
        optipng(),
        svgo(),
        pngQuint(),
        jpgRecompress()
    ]))
    .pipe(dest(paths.dist.imgs));
});

// copy vendors to dist
task('vendors', function(){
    return _src(paths.src.vendors)
    .pipe(dest(paths.dist.vendors))
});

// clean dist
task('clean', function () {
    return _src(paths.dist.root)
        .pipe(clean());
});

// Prepare all assets for production
task('build', series('sass', 'css', 'js', 'vendors', 'img'));


// Watch (SASS, CSS, JS, and HTML) reload browser on change
task('watch', function() {
    browserSync.init({
        server: {
            baseDir: paths.root.www
        } 
    })
    watch(paths.src.scss, series('sass'));
    watch(paths.src.js).on('change', browserSync.reload);
    watch(paths.src.html).on('change', browserSync.reload);
});