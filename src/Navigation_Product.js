import React, { Component } from 'react';

class Navigation_Product extends Component{
	render(){
		return(
			<div className="Navigation_Product">
				
					<ul className="Navigation_list">
						<li><a href="#"><h3 title="Products">Products</h3></a></li>
						<li><a href="#"><h3 title="Service & Solution">Service & Solution</h3></a></li>
						<li><a href="#"><h3 title="Deals">Deals</h3></a></li>
						<li ><a href="#"><h3 title="Business Expertise">Business Expertise</h3></a></li>
						<li><a href="#"><h3 title="Membership">Membership</h3></a></li>
					</ul>
				
			</div>
		);
	}
}

export default Navigation_Product;