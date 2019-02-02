import React, {Component} from 'react'
import {ScrollView} from "react-native";
import {Button, Icon, List, ListItem, Text, View} from "native-base";
import HistoryItem from './HistoryItem';

class HistorySong extends Component {
    render(){
        return (
            <ScrollView>
                <List style={styles.list}>
                    <HistoryItem/>
                </List>
            </ScrollView>
        );
    }
}

const styles = {
    list: {
        backgroundColor: '#00000070'
    }
};

export default HistorySong