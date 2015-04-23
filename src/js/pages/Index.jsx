import React from 'react';
import {Link} from 'react-router';

class Index extends React.Component {
	render(){
		return (
			<section>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<h1 className="welcome">
							<span>Welcome to your personal <span>Pokedex</span></span>
						</h1>
						<div className="row">
							<div className="col xs-6 col-xs-offset-4">
								<Link to="pokemon" className="btn btn-primary btn-lg">Start here!</Link>
								<div className="center-block"><i className="fa fa-facebook"></i></div>
							</div>

						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Index;