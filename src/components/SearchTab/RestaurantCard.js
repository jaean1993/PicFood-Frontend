/**
 * Created by Chaofeng on 18/03/2018.
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
import {connect} from "react-redux";
import StarRating from 'react-native-star-rating';

class RestaurantCard extends Component {
  constructor(props, context) {
    super(props);
    this.state = {};
  }

  onCardPress(restaurantId) {
    this.props.history.push(`/restaurants/${restaurantId}`);
  }

  render() {
    let avatar = this.props.data.avatar || "http://via.placeholder.com/100x100";
    return (
      <TouchableWithoutFeedback onPress={this.onCardPress.bind(this, this.props.data.restaurantId)}>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{cache: 'force-cache', uri: avatar}}/>
              <Body>
              <Text>{this.props.data.name}</Text>
              <Text note>{this.props.data.location}</Text>
              <StarRating
                disabled={true}
                maxStars={5}
                rating={this.props.data.avgRate}
                containerStyle={{marginTop: 3, alignSelf: "flex-start"}}
                fullStarColor={"#f5af4b"}
                emptyStarColor={"#f5af4b"}
                halfStarEnabled
                starSize={15}
              />
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{cache: 'force-cache', uri: avatar}} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
        </Card>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
};

export default withRouter(connect(
  mapStateToProps
)(RestaurantCard));
