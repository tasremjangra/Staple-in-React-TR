import React, { Component } from 'react';
import Menu_Baar_Reorder from './Menu_Baar_Reorder'
import Menu_Baar_Account from './Menu_Baar_Account'
import Menu_Baar_Connect from './Menu_Baar_Connect'
import Menu_Baar_Cart from './Menu_Baar_Cart'

class Menu_Baar extends Component{
	render(){
		return(
			<div className="Menu_Baar">
			<Menu_Baar_Reorder />
			<Menu_Baar_Account />
			<Menu_Baar_Connect />
			<Menu_Baar_Cart />
			
			</div>
		);
	}
}

export default Menu_Baar;