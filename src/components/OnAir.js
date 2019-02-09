import React, {Component} from 'react'
import {Button, Icon, ListItem, Text, View} from "native-base";
import Api from '../services/Api';
import global from '../services/global'

class OnAir extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onAir: 'unknown'
        };
    }

    checkCurrentSong(api) {
        api.getOnAir().then((res) => {
            let onAir = res.replace('Now: ', '').replace('</body></html>', '');
            global.onAir = onAir;
            this.setState({onAir: onAir});
        }).catch(() => {});
    }

    componentDidMount(): void {
        let api = new Api();
        this.checkCurrentSong(api);

        setInterval(() => {
            this.checkCurrentSong(api);
        }, 5000);
    }

    render() {
        return (
            <View>
                <Text numberOfLines={2} style={style.text}>
                    {this.state.onAir}
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
        textShadowRadius: 5,
        paddingRight: 20,
        paddingLeft: 15
    }
};

export default OnAir;