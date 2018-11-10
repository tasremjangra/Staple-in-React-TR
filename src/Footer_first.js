import React, {Component} from 'react'; 
import Footer_first_Block_1 from './Footer_first_Block_1'
import Footer_first_Block_2 from './Footer_first_Block_2'
import Footer_first_Block_3 from './Footer_first_Block_3'
import Footer_first_Block_4 from './Footer_first_Block_4'

class Footer_first extends Component{
	render(){
		return(
			<div className="Footer_first">
				<Footer_first_Block_1 />
				<Footer_first_Block_2 />
				<Footer_first_Block_3 />
				<Footer_first_Block_4 />
			</div>
		);
	}
}
export default Footer_first;