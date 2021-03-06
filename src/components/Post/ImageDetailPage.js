/**
 * Created by kai on 06/03/2018.
 */
import React, {Component} from 'react';
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Header,
  Icon,
  Input,
  Item,
  Left,
  Right,
  Text,
  Thumbnail,
  Title
} from 'native-base';
import {Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Comments from "./Comments";
import {Col, Grid, Row} from "react-native-easy-grid";

class ImageDetailPage extends Component {
  constructor(props, context) {
    super(props);
    this.state = {};
    this.handleClickBack = this.handleClickBack.bind(this);
  }

  handleClickBack() {
    // this.props.history.goBack();
    this.props.navigation.goBack();
  }

  render() {
    const {avatar, user, location, image, comments} = this.props.navigation.state;
    return (
      <Container>
        <Header style={{backgroundColor: '#D8485D'}}>
          <Left>
            <Button transparent onPress={this.handleClickBack}>
              <Icon style={{color: 'white'}} name='arrow-back'/>
            </Button>
          </Left>
          <Body>
          <Title style={{color: 'white'}}>Photo</Title>
          </Body>
          <Right/>
        </Header>
        <Grid>
          <Row size={9}>
            <Col>
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail source={{cache: 'force-cache', uri: avatar}}/>
                    <Body>
                    <Text>{user}</Text>
                    <Text note>{location}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={{cache: 'force-cache', uri: image}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                {/*<CardItem>*/}
                {/*<Left>*/}
                {/*<Button transparent>*/}
                {/*<Icon active name="chatbubbles" />*/}
                {/*/!*<Text>{this.props.data.comments.length}</Text>*!/*/}
                {/*</Button>*/}
                {/*</Left>*/}
                {/*</CardItem>*/}
                <CardItem>
                  <Left>
                    <Comments comments={comments}/>
                  </Left>
                </CardItem>
              </Card>
            </Col>
          </Row>
          <Row size={1}>
            <Col searchBar rounded>
              <Item>
                <Icon style={{color: 'white'}} name="ios-search"/>
                <Input placeholder="Search"/>
              </Item>
              <Button transparent>
                <Text>Search</Text>
              </Button>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  inputItem: {
    position: "absolute",
    bottom: 0
  },
  comments: {
    height: "100%"
  }
});


const mapStateToProps = (state, ownProps) => {
  return {}
};

export default connect(
  mapStateToProps
)(ImageDetailPage);