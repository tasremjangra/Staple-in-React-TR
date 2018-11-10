import React, {Component} from 'react';

class Footer_Mid extends Component{
	render(){
		return(
			<div className="Footer_Mid">
				<div className="Social_Media">
				<div className="Text_Align">
				<h3 className="Join_Us">Join Us on</h3>
				</div>
				<div className="Icon">
					<a href="#" className="fa fa-facebook" title="Facebook"></a>&nbsp;&nbsp;
					<a href="#" className="fa fa-twitter" title="Twitter"></a>&nbsp;&nbsp;
					<a href="#" className="fa fa-pinterest" title="printers"></a>&nbsp;&nbsp;
					<a href="#" className="fa fa-linkedin" title="Linkedin"></a>&nbsp;&nbsp;
				</div>
			</div>
			<div className="Download">
				<div class="Text_Align">
				<h3 className="Download_Our_Mobile_App">Download Our Mobile App</h3>
				</div>
				<div className="Icon">
					<a href="#" className="fa fa-apple" title="Apple"></a>&nbsp;&nbsp;
					<a href="#" className="fa fa-android" title="Android"></a>
				</div>
			</div>
			<div className="Subscribe">
				<div className="Text_Align">
				<h3 className="Staples_Offers">Staples Offers</h3>
				</div>
				<div className="Subscribe1">
					<form>
							<input id="Input2" type="text" name="" value="" placeholder="Enter email address"></input>
						 	<button type="submit" className="Button1" title="Subscribe">Subscribe</button>
					</form>
				</div>
			</div>
			</div>
		);
	}
}
export default Footer_Mid;