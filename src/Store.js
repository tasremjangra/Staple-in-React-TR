import React, { Component } from 'react';

class Store extends Component{
	render(){
		return(
			<div className="Store">
			<a href="#" title="Your Store"><span id="text_store">Your Store:</span></a>
			<span id="primaryStoreName">&ensp;Framingham, MA </span>
			<b id="primaryStoreTimings">Open 8am - 9pm</b>
			</div>
		);
	}
}

export default Store;