require.config({
  baseUrl: "../public/js",
  paths: {
    jquery: '../bower_components/jquery/dist/jquery.min',
    underscore: '../bower_components/underscore-amd/underscore-min',
    backbone: '../bower_components/backbone-amd/backbone-min',
    jasmine: '../../test/bower_components/jasmine/lib/jasmine-core/jasmine',
    'jasmine-html': '../../test/bower_components/jasmine/lib/jasmine-core/jasmine-html',
    spec: '../../test/bower_components/jasmine/spec/'
  },
  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    jasmine: {
      exports: 'jasmine'
    },
    'jasmine-html': {
      deps: ['jasmine'],
      exports: 'jasmine'
    }
  }
});

require(['underscore', 'jquery', 'jasmine-html'], function(_, $, jasmine){

  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  var htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  var specs = [];

  specs.push('all-tests.min.js');

  $(function(){
    require(specs, function(){
      jasmineEnv.execute();
    });
  });

});