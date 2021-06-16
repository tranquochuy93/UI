### Lazy loading
https://web.dev/browser-level-image-lazy-loading/
https://www.youtube.com/watch?v=AActXSWxsRo

1. There are two ways to defer the loading of off-screen images
 - Using the Intersection Observer API
 - Using scroll, resize, or orientationchange event handlers

2. Note
 - Avoid lazy-loading images that are in the first visible viewport
  any images within the viewport should be loaded eagerly using the browser's defaults.
 - Add width height attribute to images to prevent jumping content
 
 ```html
<!-- visible in the viewport -->
<img src="product-1.jpg" alt="..." width="200" height="200">
<img src="product-2.jpg" alt="..." width="200" height="200">
<img src="product-3.jpg" alt="..." width="200" height="200">

<!-- offscreen images -->
<img src="product-4.jpg" loading="lazy" alt="..." width="200" height="200">
<img src="product-5.jpg" loading="lazy" alt="..." width="200" height="200">
<img src="product-6.jpg" loading="lazy" alt="..." width="200" height="200">
 ```
### build scss to css using GULP
1. install gulp
```cmd
npm install gulp-cli -g
install --save-dev gulp gulp-sass browser-sync
```

2. create file /gulpfile.js
```js
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compiler scss to css
function style() {
    // where is my scss files
    return gulp.src('./scss/**/*.scss')
    // pass that file throught sass compiler
    .pipe(sass())
    // where do I save css files
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    // gulp.watch('./js/**/*.js', browserSync.reload);
}
exports.style = style;
exports.watch = watch;
```

3. run
```cmd
gulp style
gulp watch
```
