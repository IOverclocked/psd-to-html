const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const browserSync = require('browser-sync').create();

sass.compiler = require("node-sass");

const runScss = () => {
    return src("./sass/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(dest("./css"))
        .pipe(browserSync.stream());
};

const runBrowserSync = () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })

    watch("./sass/**/*.scss", runScss);
    watch("./*.html").on('change', browserSync.reload);
}



exports.default = () => {
  runBrowserSync()
};
