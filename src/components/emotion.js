import React, {Component} from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';

import CardComponent from './card';
import { setEmotion } from './api';


import './bootstrap.min.css';
import './emotion.css';



class Emotion extends Component{
	 setRef = (webcam) => {
    	this.webcam = webcam;
  	}
	state = {image:"",feed:[]}
  	getEmotion = () => {
  		const imageSrc = this.webcam.getScreenshot();
  		this.setState({image:imageSrc});

  		axios.get('http://localhost:8000/detect')
  		.then((response)=>{
  			setEmotion((err,feed)=>this.setState({feed}));
  			console.log(this.state.feed);
  		})
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
				<button className="btn btn-primary" style={{margin:10}} onClick={this.getEmotion}>GetEmotion</button>
				<CardComponent />
			</div>
		)
	}
} 

export default Emotion;