import React, {Component} from 'react'
import {Button, Icon, ListItem, Text, View, Toast} from "native-base";
import {Col, Grid} from 'react-native-easy-grid';
import RNFetchBlob from 'rn-fetch-blob'
import {PermissionsAndroid} from 'react-native';
import Moment from 'moment';


class HistoryItem extends Component {


    getLocalTime(time){
        if(time === '-:-'){
            return time;
        }

        let fromServer = Moment(time);
        let date = new Date();
        let offsetInHours = date.getTimezoneOffset() / 60 * -1;
        fromServer.add(offsetInHours, 'hours');

        return fromServer.format('HH') + ':' +  fromServer.format('mm');
    }

    render() {
        return (
            <ListItem style={styles.listItem}>
                <Grid>
                    <Col style={{}} size={2}>
                        <View style={styles.viewCenterContent}>
                            <Text style={styles.time.text}>{this.getLocalTime(this.props.data.time)}</Text>
                        </View>
                    </Col>
                    <Col style={styles.title.col} size={9}>
                        <View style={styles.viewCenterContent}>
                            <Text numberOfLines={1} style={styles.title.text}>
                                {this.props.data.title}
                            </Text>
                        </View>
                    </Col>
                </Grid>
            </ListItem>
        );
    }
}

const styles = {
    listItem: {
        paddingTop: 10,
        paddingBottom: 10
    },
    time: {
        text: {
            color: 'white'
        }
    },
    title: {
        col: {
            textAlign: 'center'
        },
        text: {
            color: 'white',
            fontSize: 14
        }
    },
    download: {
        button: {
            height: 25
        },
        icon: {
            color: 'white',
            fontSize: 15
        }
    },
    viewCenterContent: {
        flex: 1,
        justifyContent: 'center'
    }
};

export default HistoryItem;