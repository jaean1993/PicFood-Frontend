/**
 * Created by jin on 19/03/2018.
 */

import React, { Component } from 'react';
import { Image,StyleSheet,TouchableWithoutFeedback } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, List, ListItem } from 'native-base';
import {withRouter} from "react-router-native";
import network from "../../network";

class Dishes extends Component {
    constructor(props,context){
        super(props,context);
        this.state={
            imageUrl:""
        }
    }
    componentDidMount(){
        network.dish.getDishImages(this.props.data.dishId)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data && data.length > 0)
                    this.setState({
                        imageUrl:data[0]
                    });
            }).catch(err=>{
                console.log(err);
        });
    }
    onDishCardPress(dishId) {
        this.props.history.push(`/dishes/${dishId}`);
    }
    render() {

        return (
            <Card >
                <CardItem>
                    <Text>{this.props.data.name}</Text>
                </CardItem>
                <CardItem>
                    <TouchableWithoutFeedback onPress={this.onDishCardPress.bind(this, this.props.data.dishId)}>
                        <Image source={{uri: this.state.imageUrl || "http://via.placeholder.com/100x100"}} style={{height: 200, width: null, flex: 1}}/>
                    </TouchableWithoutFeedback>
                </CardItem>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    listItem:{
      borderColor:"transparent"
    },
    dish: {
      fontSize: 17,
      textAlign: 'center',
    }
});

export default withRouter(Dishes);