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
	state = {image:"",feed:[],emotion:""}
  	getEmotion = () => {
  		const imageSrc = this.webcam.getScreenshot();
  		this.setState({image:imageSrc});

  		axios.get('http://localhost:8000/detect')
  		.then((response)=>{
			setEmotion((err,feed)=>{this.setState({feed:feed.data,emotion:response.data})},{data:response.data});
  		})
  	}
  	renderImage = () =>{
  		if(this.state.image){
  			return <img src={this.state.image} />
  		}
	  }

	renderFeed = () => {
		if(this.state.emotion && this.state.feed){
			return this.state.feed[0].feed.map((news)=>{
				console.log(news);
				return(
					<div style={{margin:120}} >
						<CardComponent key={news._id} news={news} />
					</div>
				);
			});
		}
	}

	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-sm">
					      <Webcam audio={false}
					          height={0}
					          ref={this.setRef}
					          screenshotFormat="image/jpeg"
					          width={0}
         					/>
					</div>
				


				</div>
				<button className="btn btn-primary" style={{margin:10}} onClick={this.getEmotion}>GetEmotion</button>
				{this.renderFeed()}
			</div>
		)
	}
} 

export default Emotion;