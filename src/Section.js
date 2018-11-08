import React, { Component } from 'react';


class Section extends Component{
	render(){
		return(
			<div className="Section">
				<div className="search">
					<form>
						<input id="inputsize" type="text" name="" placeholder="Search for all your business need"></input>
						<button type="submit" className="buttonsize"><i class="fa fa-search"></i></button>
					</form>
				</div>

				
			</div>
		);
	}
}

export default Section;