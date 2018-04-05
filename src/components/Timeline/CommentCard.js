/**
 * Created by kai on 10/03/2018.
 */
import React, {Component} from 'react';
import {Image, TouchableWithoutFeedback} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from 'native-base';
import {withRouter} from 'react-router-native';
import network from "../../network";

class CommentCard extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
    };
    this.handleClickImage = this.handleClickImage.bind(this);
    this.handleClickUser = this.handleClickUser.bind(this);
  }

  handleClickImage() {
    this.props.history.push(`/dishes/${this.props.data.dishId}`)
  }

  handleClickUser() {
    this.props.history.push(`/user/${this.props.data.commenterId}`)
  }

  render() {
    return (
      <Card style={{padding: 5}}>
        <CardItem>
          <TouchableWithoutFeedback onPress={this.handleClickUser}>
            <Left>
              <Thumbnail small source={{uri: this.props.data.userAvatar || "http://via.placeholder.com/100x100"}}/>
              <Body>
              <Text style={{fontSize: 16}}>{this.props.data.userName}</Text>
              {/*<Text note style={{fontSize:14}}>{this.props.data.location}</Text>*/}
              </Body>
            </Left>
          </TouchableWithoutFeedback>
        </CardItem>
        <CardItem cardBody>
          <TouchableWithoutFeedback onPress={this.handleClickImage}>
            <Body style={{paddingTop: 5, paddingBottom: 20, paddingLeft: 20, paddingRight: 20}}>
            <Text note><Icon ios="ios-quote" android="quote" style={{fontSize: 15, color: 'blue'}}/> Comment on dish <Text
              style={{marginLeft: 10}}>{this.props.data.dishName}</Text>:</Text>
            <Text style={{marginTop: 5, marginLeft: 10}}>{this.props.data.content}</Text>
            </Body>
          </TouchableWithoutFeedback>
        </CardItem>
      </Card>
    );
  }
}

export default withRouter(CommentCard);