// collection of test files
var testFiles = [];

// Used to convert paths to find test files
var pathToModule = function(path) {
    return path.replace(/^\/base\//, "../../").replace(/\.js$/, '');
};

// Loop over each file karma is aware of and check which are test file
Object.keys(window.__karma__.files).forEach(function(file) {
    if (/\.spec\.js$/.test(file)) {
        testFiles.push(pathToModule(file));
    }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/public/js',

  // dynamically load all test files
  deps: testFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start,

  shim: {
    backbone: {
      deps:  ["jquery"] ,
      exports: "Backbone"
    },
    underscore: {
      deps:  ["jquery"] ,
      exports: "_"
    },
    react: {
      exports: "React"
    },
    "JSXTransformer": "JSXTransformer",
    jasmine: {
            exports: 'jasmine'
    },
    'jasmine-html': {
        deps: ['jasmine'],
        exports: 'jasmine'
    }
  },
  paths: {
    backbone: "../bower_components/backbone/backbone",
    underscore: "../bower_components/underscore/underscore",
    react: "../bower_components/react/react-with-addons",
    "react-router": "../bower_components/react-router/build/global/ReactRouter",
    requirejs: "../bower_components/requirejs/require",
    "backbone": "../bower_components/backbone-amd/backbone",
    "underscore": "../bower_components/underscore-amd/underscore",
    JSXTransformer: "../bower_components/react/JSXTransformer",
    'jsx': "../bower_components/jsx-requirejs-plugin/js/jsx",
    text: "../bower_components/requirejs-text/text",
    'react.backbone' : "../bower_components/react.backbone/react.backbone",
    'jquery' : "../bower_components/jquery/dist/jquery",
    'jasmine' : "../bower_components/jasmine/lib/jasmine-core/jasmine",
    'spec' : "../bower_components/jasmine/spec/"
  },
  jsx: {
        fileExtension: '.jsx'
    }
});
