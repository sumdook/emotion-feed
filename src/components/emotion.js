import React, {Component} from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
import './bootstrap.min.css';
import './emotion.css'; 


const URL= 'https://api-us.faceplusplus.com/facepp/v3/detect';
const API_KEY = 'Tp-urx4Rg9TxHueNgTFpkZjwKRaNscDW';

class Emotion extends Component{
	 setRef = (webcam) => {
    	this.webcam = webcam;
  	}
	state = {image:""}
  	getEmotion = () => {
  		const imageSrc = this.webcam.getScreenshot();
  		this.setState({image:imageSrc});

  		axios.post('https://api-us.faceplusplus.com/facepp/v3/detect',
  		{
  			api_key:"Tp-urx4Rg9TxHueNgTFpkZjwKRaNscDW",
  			api_secret:"tJ4HvKH8aKid7pwJafp38L9PanzOUTEU",
  			image_base64:imageSrc,
  			return_attributes:"emotion"

  		},{headers:{"Access-Control-Allow-Origin":"http://127.0.0.1:3000"}});
  	}
  	renderImage = () =>{
  		if(this.state.image){
  			return <img src={this.state.image} />
  		}
  	}
	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-sm">
					      <Webcam audio={false}
					          height={350}
					          ref={this.setRef}
					          screenshotFormat="image/jpeg"
					          width={350}
         					/>
					</div>
					<div className="col-sm">
					{this.renderImage()}
					</div>


				</div>
				<button className="btn btn-primary" onClick={this.getEmotion}>GetEmotion</button>
			</div>
		)
	}
} 

export default Emotion;