var gulp = require('gulp')
	gls = require('gulp-live-server')
  babel = require('gulp-babel')
	karma = require('karma').server;

gulp.task('test', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

gulp.task('babel', function(){
  return gulp.src(["src/**/*.js", "src/**/*.jsx"])
    .pipe(babel({modules:"amd"}))
    .pipe(gulp.dest("public"));
});

gulp.task('watch', function(){
  gulp.watch('test/spec/**.*.js', ['concat']);
  gulp.watch(['src/**/*.js', 'src/**/*.jsx'], ['babel']);
});

gulp.task('tdd', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js'
  }, done);
});

gulp.task('server', function(){
	var server = gls.new('bin/www');
	server.start();	
});

gulp.task('default', ['server', 'watch', 'babel']);