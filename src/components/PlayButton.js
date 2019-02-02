import React, {Component} from 'react'
import {Button, Icon, View} from "native-base";

class PlayButton extends Component{
    render(){
        return(
            <View>
                <Button style={style.button}>
                    <Icon type='FontAwesome5' name='play' style={style.icon}/>
                </Button>
            </View>
        );
    }
}

const style = {
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        borderRadius: 90
    },
    icon: {
        color: 'white'
    }
};

export default PlayButton;
