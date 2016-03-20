//Get gulp from node_modules
var gulp = require("gulp");

//Get less from node_modules
var less = require("gulp-less");

//Get uglify from node_modules
var uglify = require("gulp-uglify");

//Create tasks that will process the source code with the gulp modules above
gulp.task("less", function()
{
   return gulp.src("src/style/*.less") //Get the less-files from src/style
       .pipe(less()) //Takes the less-files from above and translates less to css
       .pipe(gulp.dest("dist/style/")); //Move the processed files to dist/style
});

gulp.task("html", function()
{
   return gulp.src("src/index.php") //Get the html-file from src
       .pipe(gulp.dest("dist/")); //Move the html-file to dist
});

gulp.task("js", function()
{
   return gulp.src("src/js/*.js") //Get the js-files from src/js
       .pipe(uglify()) //Takes the js-files and minifies them
       .pipe(gulp.dest("dist/js/")); //Move the processed files to dist/js
});

gulp.task("images", function()
{
   return gulp.src("src/images/*") //Get ALL files in images
       .pipe(gulp.dest("dist/images/")); //Move to dist/images folder
});

gulp.task("all", ["less", "html", "js", "images"]); //Performs all of the tasks above

gulp.task("default", ["all"]); //Performs all of the tasks, just type gulp in the prompt