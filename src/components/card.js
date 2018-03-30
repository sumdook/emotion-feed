import React,{Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class CardComponent extends Component{ 
  render(){
      return(
      <Card>
        <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
          >
            <img src={this.props.news.image} alt="" />
          </CardMedia>
        <CardTitle title={this.props.news.title} subtitle={this.props.news.source_name} />
        <CardText style={{fontSize:20}}>
          {this.props.news.description}
        </CardText>
        <CardActions>
          <FlatButton label="Read" />
        </CardActions>
      </Card>
    );
  }
}
export default CardComponent;