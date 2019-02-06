import React, {Component} from 'react'
import {Button, Icon, Toast, View, Spinner} from "native-base";
import Sound from 'react-native-sound';

class PlayButton extends Component {
    constructor(props) {
        super(props);
        this.url = 'http://www.heavy-music.ru:8107/320?type=http&nocache=14';
        this.state = {play: false, buffering: false};
        this.radio = null;
    }

    play = () => {
        if(this.state.buffering){
            return;
        }

        const callback = (error, sound) => {
            sound.play((success)=>{
                this.radio.stop(() => {
                    this.radio.release();
                    this.setState({play: false,  buffering: false});
                    this.play();
                });
            });
            this.setState({play: true, buffering: false});
        };

        if (this.state.play) {
            this.radio.stop(() => {
                this.radio.release();
                this.setState({play: false, buffering: false})
            });
        } else {
            Toast.show({
                text: 'Buffering...',
            })
            this.setState({buffering: true});
            this.radio = new Sound(this.url, null, error => callback(error, this.radio));
        }
    }

    render() {
        let icon;
        if (this.state.play) {
            icon = <Icon type='FontAwesome5' name='pause' style={style.icon}/>;
        } else {
            icon = <Icon type='FontAwesome5' name='play' style={style.icon}/>;
        }

        if(this.state.buffering){
            icon = <Spinner color='white' />
        }

        return (
            <View>
                <Button style={style.button} onPress={this.play}>
                    {icon}
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
