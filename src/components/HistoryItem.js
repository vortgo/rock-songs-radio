import React, {Component} from 'react'
import {Button, Icon, ListItem, Text, View, Toast} from "native-base";
import {Col, Grid} from 'react-native-easy-grid';
import RNFetchBlob from 'rn-fetch-blob'
import {PermissionsAndroid} from 'react-native';


class HistoryItem extends Component {

    async requestPermission() {

        try {
            const granted = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            ]);

            return granted[PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE] === PermissionsAndroid.RESULTS.GRANTED && granted[PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE] === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
            console.warn(err)
        }
    }

    download = async (url, songName) => {
        url = 'http://dl.heavy-music.ru:81/Amberian%20Dawn/(2010)%20-%20End%20of%20Eden/05.%20Sampo.mp3';

        let dirs = RNFetchBlob.fs.dirs;

        if (await this.requestPermission()) {
            let path = 'file://' + RNFetchBlob.fs.dirs.DownloadDir;
            RNFetchBlob
                .config({
                    addAndroidDownloads: {
                        useDownloadManager: true, // <-- this is the only thing required
                        notification: true,
                        path: path + '/' + songName + '.mp3',
                    }
                })
                .fetch('GET', url)
                .then(() => {
                    Toast.show({
                        text: 'File was successfully downloaded',
                    })
                }).catch((error) => {
                console.log(error);
            });
            Toast.show({
                text: 'File download started',
            })
        } else {
            Toast.show({
                text: 'Please grant the rights and try again.',
            })
        }


    }

    render() {
        let downloadBtn = null;
        if (this.props.data.url) {
            downloadBtn = <Button style={styles.download.button} onPress={() => {
                this.download(this.props.data.url, this.props.data.title);
            }} primary>
                <Icon type='FontAwesome5' name='cloud-download-alt'
                      style={styles.download.icon}/>
            </Button>;
        }

        return (
            <ListItem style={styles.listItem}>
                <Grid>
                    <Col style={{}} size={2}>
                        <View style={styles.viewCenterContent}>
                            <Text style={styles.time.text}>{this.props.data.time}</Text>
                        </View>
                    </Col>
                    <Col style={styles.title.col} size={9}>
                        <View style={styles.viewCenterContent}>
                            <Text numberOfLines={1} style={styles.title.text}>
                                {this.props.data.title}
                            </Text>
                        </View>
                    </Col>
                    <Col size={2}>
                        <View style={styles.viewCenterContent}>
                            {downloadBtn}
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