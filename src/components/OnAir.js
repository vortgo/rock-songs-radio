import React, {Component} from 'react'
import {Button, Icon, ListItem, Text, View} from "native-base";

class OnAir extends Component {
    render() {
        return (
            <View>
                <Text numberOfLines={2} style={style.text}>
                    Helloween - Long Road to hot hell Long Road to hot hell
                </Text>
            </View>
        );
    }
}

const style = {
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        textShadowColor: 'black',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 5
    }
};

export default OnAir;