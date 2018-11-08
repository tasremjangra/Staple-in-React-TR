import React, { Component } from 'react';
import Staple_img from './Staple_img'
import Section from './Section'
import Menu_Baar from './Menu_Baar'

class Mid_header extends Component{
	render(){
		return(
			<div className="Mid_header">
			<Staple_img />
			<Section />
			<Menu_Baar />
			</div>
		);
	}
}

export default Mid_header;