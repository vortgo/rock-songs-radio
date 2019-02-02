import React, {Component} from 'react'
import {Button, Icon, ListItem, Text, View} from "native-base";
import {Col, Grid} from 'react-native-easy-grid';

class HistoryItem extends Component {
    render() {
        return (
            <ListItem style={styles.listItem}>
                <Grid>
                    <Col style={{}} size={2}>
                        <View style={styles.viewCenterContent}>
                            <Text style={styles.time.text}>6:00</Text>
                        </View>
                    </Col>
                    <Col style={styles.title.col} size={9}>
                        <View style={styles.viewCenterContent}>
                            <Text numberOfLines={1} style={styles.title.text}>Simon
                                Markov - very long song name </Text>
                        </View>
                    </Col>
                    <Col size={2}>
                        <View style={styles.viewCenterContent}>
                            <Button style={styles.download.button} primary>
                                <Icon type='FontAwesome5' name='cloud-download-alt'
                                      style={styles.download.icon}/>
                            </Button>
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
    viewCenterContent:{
        flex: 1,
        justifyContent: 'center'
    }
};

export default HistoryItem;