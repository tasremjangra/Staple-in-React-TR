import React, { Component } from 'react';
import Header_top from './Header_top'
import Mid_header from './Mid_header'
import Navigation from './Navigation'

class Globleheader extends Component{
	render(){
		return(
			<div className="Globleheader">
			<Header_top />
			<Mid_header />
			</div>
		);
	}
}

export default Globleheader;