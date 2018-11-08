import React, { Component } from 'react';
import Menu_Baar_Cart_icon from './Menu_Baar_Cart_icon'
import Menu_Baar_Cart_text from './Menu_Baar_Cart_text'


class Menu_Baar_Cart extends Component{
	render(){
		return(
			<div className="Menu_Baar_Cart">
				<Menu_Baar_Cart_icon />
				<Menu_Baar_Cart_text />
			</div>
		);
	}
}

export default Menu_Baar_Cart;