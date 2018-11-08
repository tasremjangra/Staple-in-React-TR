import React, { Component } from 'react';
import Site_section from './Site_section'
import Employee from './Employee'
import Store from './Store'
import Add from './Add'

class Header_top extends Component{
	render(){
		return(
			<div className="Header_top">
			<Site_section />
			<Employee />
			<Store />
			<Add />
			</div>
		);
	}
}

export default Header_top;