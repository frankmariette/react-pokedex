import React from 'react';
import Backbone from 'backbone';
import Router from 'react-router';
import {DefaultRoute, Route} from 'react-router';
import Layout from './pages/Layout';
import Index from './pages/Index';
import Pokemon from './pages/Pokemon';

let routes = (
	<Route handler={Layout}>
		<Route name="home" path="/" handler={Index} />
		<Route name="pokemon" path="/pokemon" handler={Pokemon} />
	</Route>
);

class App extends Backbone.View {
	constructor() {
		super();
	}
	render() {
		Router.run(routes, function(Handler){
			React.render(<Handler />, document.body);
		})
	}
}


export default App;
