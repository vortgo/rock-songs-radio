import React, {Component} from 'react';
import View from 'react-native';
import {Body, Icon, Left, Right, Title, Header} from "native-base";

class AppHeader extends Component {
    render() {
        return (
            <Header style={style.header}>
                <Left>
                    <Icon type='FontAwesome5' name='headphones-alt' style={style.icon}/>
                </Left>
                <Body>
                <Title>Radio</Title>
                </Body>
                <Right/>
            </Header>
        );
    }
}

const style = {
    header: {
        height: 50
    },
    icon: {
        color: 'white'
    }
};

export default AppHeader;