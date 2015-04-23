import React from 'react';
import List from '../components/List';
import Pokemen from '../collections/Pokemen';

class Pokemon extends React.Component {
	constructor(props){
		super(props);
		this.state = {hasPreviousPage: false};
	}
	componentWillMount(){
		Pokemen.getFirstPage({fetch: true});
	}
	handlePreviousClick(event){
		var previous = Pokemen.hasPreviousPage();
		this.setState({hasPreviousPage: previous});
		if (Pokemen.hasPreviousPage()){
			Pokemen.getPreviousPage();
		}
		else {
			return null;
		}
	}
	handleNextClick(){
		var previous = Pokemen.hasPreviousPage(function(reponse){
			console.log(reponse);
		});
		this.setState({hasPreviousPage: previous});
		Pokemen.getNextPage();
	}
	render() {
		// var hasPreviousPage = this.state.hasPreviousPage;
		return(
			<List 
				hasPreviousPage={this.state.hasPreviousPage}
				previousClick={this.handlePreviousClick.bind(this)} 
				nextClick={this.handleNextClick.bind(this)} 
				collection={Pokemen} 
			/>
		)
	}
}

export default Pokemon;