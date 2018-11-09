import React ,{Component} from 'react';
import Mid_Part_left from './Mid_Part_left'
import Mid_Part_Right from './Mid_Part_Right'

class Mid_Part extends Component{
	render(){
		return(
			<div className="Mid_Part">
			<Mid_Part_left />
			<Mid_Part_Right />
			</div>
		);
	}
}
export default Mid_Part;