var gulp = require('gulp')
	gls = require('gulp-live-server')
	karma = require('karma').server;

gulp.task('test', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

gulp.task('watch', function(){
  gulp.watch('test/spec/**.*.js', ['concat']);
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

gulp.task('default', ['server', 'tdd', 'watch']);