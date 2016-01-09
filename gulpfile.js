var gulp = require("gulp");
var livereload = require("gulp-livereload");
var watchify = require("watchify");
var browserify = require("browserify");
var babelify = require("babelify");
var stringify = require("stringify");
var ngannotate = require("browserify-ngannotate");
var source = require("vinyl-source-stream");

var config = {
  root: 'src/App.js',
  src: ["src/**/*.js"]
};

gulp.task("build:js", function (done) {
  var args = watchify.args;
  args.extensions = ['.js'];
  args.debug = true;

  watchify(browserify(config.root, args), args)
    .transform(stringify([".html"]))
    .transform(babelify)
    .transform(ngannotate)
    .bundle()
    .on('error', function(err){
      console.error(err.message);
      done();
    })
    .pipe(source("app.js"))
    .pipe(gulp.dest("./public/js"))
    .pipe(livereload()).on('end', function(){
      done();
    });
});

gulp.task("default", ["build:js"], function () {
  livereload({
    start: true
  });

  gulp.watch(config.src, ["build:js"]);
});
