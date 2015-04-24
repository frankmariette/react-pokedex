import React from 'react';
import {Link} from 'react-router';

class Index extends React.Component {
	render(){
		return (
			<section id="index">
				<div className="row">
					<div id="welcome" className="col-xs-10 col-xs-offset-1">
						<h1>
							<span>Welcome to the PokeDex</span>
						</h1>
						<div className="row">
							<div className="col xs-6 col-xs-offset-4">
								<Link to="pokemon" className="btn btn-primary btn-lg">Start here!</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Index;