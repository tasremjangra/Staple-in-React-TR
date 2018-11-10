import React ,{Component} from 'react';
import Footer_first from './Footer_first'
import Footer_Mid from './Footer_Mid'
import Footer_Last from './Footer_Last'

class Footer extends Component{
	render(){
		return(
			<div className="Footer">
			<Footer_first />
			<Footer_Mid />
			<Footer_Last />
			</div>
		);
	}
} 

export default Footer;