define(function(require){
	var React = require('react');
	var List = require('jsx!js/components/List');
	var Pokemen = require('js/collections/Pokemen');

	var App = Backbone.View.extend({
		initialize: function(){
			var self = this;
			Pokemen.fetch({
				success: function(res){
					self.render();
				}
			});
		},
		render: function(){
			return (
				React.render(<List collection={Pokemen} />, document.body)
			)
		}
	})

	return App;
})