import React ,{Component} from 'react';
import Sing_In from './Sing_In'
 
 class Last_Header extends Component{
 	render(){
 		return(
 			<div className="Last_Header">
	 			<div className="Welcome">
	 				<h2>Welcome to staples</h2>
	 			</div>
	 			<div className="Center">
	 				<div class="Text1">
					<a href="#"> Want Free Next-Day Delivery with NO MIN<br/>
					Join staple Plus! Exclusions apply.</a>
			   		</div>
	 			</div>
	 			<Sing_In />
 			</div>
 		);
 	}
 }

 export default Last_Header;