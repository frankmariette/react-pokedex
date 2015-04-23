requirejs.config({
	shim: {
		backbone: {
			deps:  ["jquery"] ,
			exports: "Backbone"
		},
		bootstrap: {
			deps: ["jquery"]
		},
		underscore: {
			deps:  ["jquery"] ,
			exports: "_"
		},
		react: {
			exports: "React"
		},
		"backbone-react-component": {
			deps: ["backbone", "react"],
			exports: "Backbone.React.Component"
		},
		"JSXTransformer": "JSXTransformer"
    },
	paths: {
		babel: '../bower_components/requirejs-babel/babel-4.6.6.min',
		backbone: "../bower_components/backbone-amd/backbone",
		'backbone.paginator': '../bower_components/backbone.paginator/lib/backbone.paginator',
		'backbone-react-component': "../bower_components/backbone-react-component/lib/component",
    	bootstrap: '../bower_components/bootstrap/dist/js/bootstrap.min',
    	es6: '../bower_components/requirejs-babel/es6',
    	'jquery' : "../bower_components/jquery/dist/jquery",
    	'jsx': "../bower_components/jsx-requirejs-plugin/js/jsx",
    	JSXTransformer: "../bower_components/react/JSXTransformer",
    	localstorage: "../bower_components/backbone.localstorage/backbone.localstorage",
		react: "../bower_components/react/react-with-addons",
		'react-bootstrap': '../bower_components/react-bootstrap',
		"react-router": "../bower_components/react-router/build/global/ReactRouter",
		'react-router-bootstrap': "../bower_components/react-router-bootstrap/lib/ReactRouterBootstrap",
		requirejs: "../bower_components/requirejs/require",
		text: "../bower_components/requirejs-text/text",
		"underscore": "../bower_components/underscore-amd/underscore"
	},
	babel: {
        fileExtension: '.jsx'
    }
});

require(['js/app'], function(App){
	var app = new App();
	app.render();
});