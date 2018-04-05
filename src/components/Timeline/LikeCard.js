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
  Text,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right
} from 'native-base';
import {withRouter} from 'react-router-native';
import network from "../../network";

class LikeCard extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
    };
    this.handleClickImage = this.handleClickImage.bind(this);
    this.handleClickUser = this.handleClickUser.bind(this);
  }

  handleClickImage() {
    this.props.history.push(`/dishes/${this.state.dishId}`)
  }

  handleClickUser() {
    this.props.history.push(`/user/${this.props.data.userId}`)
  }

  render() {
    return (
      <Card style={{marginBottom: 5}}>
        {/*<Card style={{bordeNrColor: "transparent", shadowColor: "transparent"}}>*/}
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
            <Text note><Icon name="md-heart" style={{fontSize: 15, color: 'red'}}/> Liked dish <Text
              style={{marginLeft: 5}}>{this.props.data.dishName}</Text></Text>
            </Body>
          </TouchableWithoutFeedback>
        </CardItem>

      </Card>
    );
  }
}

export default withRouter(LikeCard);