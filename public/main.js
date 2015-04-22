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
		'react.backbone' : "../bower_components/react.backbone/react.backbone",
		'jquery' : "../bower_components/jquery/dist/jquery",
		localstorage: "../bower_components/backbone.localstorage/backbone.localstorage"
	},
	jsx: {
        fileExtension: '.jsx'
    }
});

require(['jsx!js/app', 'react'], function(App, React){
	var app = new App();
});