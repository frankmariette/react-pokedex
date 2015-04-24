import React from 'react';
import List from '../components/List';
import Pokemen from '../collections/Pokemen';

class Pokemon extends React.Component {
	constructor(props){
		super(props);
		// this.state = {
		// 	currentPage: Pokemen.state.currentPage,
		// 	firstPage: Pokemen.state.firstPage,
		// 	lastPage: Pokemen.state.lastPage
		// };
	}
	componentWillMount(){
		Pokemen.getFirstPage();
	}
	handlePreviousClick(){
		if (Pokemen.hasPreviousPage()){
			this.setState({hasPreviousPage:true});
			Pokemen.getPreviousPage();
		}
		else {
			this.setState({hasPreviousPage:false});
			return null;
		}
	}
	handleNextClick(){
		var previous = Pokemen.hasPreviousPage();
		this.setState({hasPreviousPage: previous});
		Pokemen.getNextPage();
	}
	render() {
		// var hasPreviousPage = this.state.hasPreviousPage;
		return(
			<List 
				pageInfo={Pokemen.state}
				previousClick={this.handlePreviousClick.bind(this)} 
				nextClick={this.handleNextClick.bind(this)} 
				collection={Pokemen} 
			/>
		)
	}
}

export default Pokemon;