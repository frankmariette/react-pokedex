requirejs.config({
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
		"backbone-react-component": {
			deps: ["backbone", "react"],
			exports: "Backbone.React.Component"
		},
		"JSXTransformer": "JSXTransformer"
    },
	paths: {
		react: "../bower_components/react/react-with-addons",
		"react-router": "../bower_components/react-router/build/global/ReactRouter",
		requirejs: "../bower_components/requirejs/require",
		backbone: "../bower_components/backbone-amd/backbone",
		"underscore": "../bower_components/underscore-amd/underscore",
		JSXTransformer: "../bower_components/react/JSXTransformer",
		'jsx': "../bower_components/jsx-requirejs-plugin/js/jsx",
		text: "../bower_components/requirejs-text/text",
		'backbone-react-component': "../bower_components/backbone-react-component/lib/component",
		'jquery' : "../bower_components/jquery/dist/jquery",
		localstorage: "../bower_components/backbone.localstorage/backbone.localstorage",
		es6: '../bower_components/requirejs-babel/es6',
    	babel: '../bower_components/requirejs-babel/babel-4.6.6.min'
	},
	babel: {
        fileExtension: '.jsx'
    }
});

require(['js/app'], function(App){
	var app = new App();
	app.render();
});