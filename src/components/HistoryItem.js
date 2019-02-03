import React, {Component} from 'react'
import {Button, Icon, ListItem, Text, View} from "native-base";
import {Col, Grid} from 'react-native-easy-grid';
import RNFetchBlob from 'rn-fetch-blob'
import {PermissionsAndroid} from 'react-native';


class HistoryItem extends Component {

    async requestPermission() {

        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    'title': 'ReactNativeCode Location Permission',
                    'message': 'ReactNativeCode App needs access to your location '
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {

                return true;
            } else {

                return false;
            }
        } catch (err) {
            console.warn(err)
        }
    }

    download = (url) => {
        // url = 'https://cdn1.sefon.me/api/mp3_download/direct/133762/77h_3G9Gd3Vphh7cfD-h4GlCf3YhNfT22VSk_3c5LEcJsMoZrWoaUv53YXxyX7ta/';
        url = 'http://dl.heavy-music.ru:81/Amberian%20Dawn/(2010)%20-%20End%20of%20Eden/05.%20Sampo.mp3';

        let dirs = RNFetchBlob.fs.dirs;
        // RNFetchBlob
        //     .config({
        //         // DCIMDir is in external storage
        //         path : dirs.DownloadDir + '/music.mp3'
        //     })
        //     .fetch('GET', url)
        //     .then((res) => RNFetchBlob.fs.scanFile([ { path : res.path(), mime : 'audio/mpeg' } ]))
        //     .then(() => {
        //         // scan file success
        //     })
        //     .catch((err) => {
        //         // scan file error
        //     })

        if (this.requestPermission()) {
            let path = 'file://' + RNFetchBlob.fs.dirs.DownloadDir;
            RNFetchBlob
                .config({
                    addAndroidDownloads: {
                        useDownloadManager: true, // <-- this is the only thing required
                        notification: true,
                        path: path + '/music.mp3',
                    }
                })
                .fetch('GET', url)
                .then((resp) => {
                    alert(resp.path());
                })
        }


    }

    render() {
        let downloadBtn = null;
        if (this.props.data.url) {
            downloadBtn = <Button style={styles.download.button} onPress={() => {
                this.download(this.props.data.url);
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