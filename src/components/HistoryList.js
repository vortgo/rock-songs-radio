import React, {Component} from 'react'
import {ScrollView, FlatList} from "react-native";
import {Button, Icon, List, ListItem, Text, View} from "native-base";
import HistoryItem from './HistoryItem';
import Api from "../services/Api";

class HistorySong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: []
        };
    }

    checkHistory(api) {
        api.getHistory().then((res) => {
            this.setState({history: res});
        });
    }

    componentDidMount(): void {
        let api = new Api();
        this.checkHistory(api);
        setInterval(() => {
            this.checkHistory(api);
        }, 5000);
    }


    render() {
        return (
            <ScrollView>
                <FlatList
                    style={styles.list}
                    data={this.state.history}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => {
                        return (
                            <HistoryItem data={item}/>
                        );
                    }}
                />
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