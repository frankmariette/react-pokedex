import React from 'react';
import List from 'js/components/List';
import Pokemen from 'js/collections/Pokemen';
import Backbone from 'backbone';

class App extends Backbone.View {
	constructor(){
		super();
	}
	render() {
		return (
			React.render(<List collection={Pokemen} />, document.body)
		);
	}
}

export default App;
