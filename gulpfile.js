
var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass');

var config = {
    srcDir : 'src/',
    buildDir : 'build/'
};

gulp.task('default', ['build']);

gulp.task('build', ['html', 'styles', 'js', 'resources']);

gulp.task('html', function(){

    return gulp.src(config.srcDir + '**/*.html')
            .pipe(gulp.dest(config.buildDir));
});

gulp.task('styles', function(){

    return gulp.src(config.srcDir + 'styles.scss')
                .pipe(sass().on('error', sass.logError))
                .pipe(gulp.dest(config.buildDir));
});

gulp.task('js', function(){
    return gulp.src(config.srcDir + '**/*.js')
            .pipe(gulp.dest(config.buildDir));
});

gulp.task('resources', function(){
    return gulp.src(config.srcDir + '**/*.*')
            .pipe(gulp.dest(config.buildDir));
})

/*** CLEAN ***/
gulp.task('clean', ['clean:html', 'clean:styles', 'clean:js', 'clean:resources']);

gulp.task('clean:html', function(){
    clean(config.buildDir + '**/*.html');
});

gulp.task('clean:styles', function(){
    clean(config.buildDir + 'styles.css');
});

gulp.task('clean:js', function(){
    clean(config.buildDir + '**/*.js');
});

gulp.task('clean:resources', function(){
    clean(config.buildDir + 'res/**/.*');
});

function clean(files, cb){
    console.log('Cleaning ' + files);
    del(files, cb);
}