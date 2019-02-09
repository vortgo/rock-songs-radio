import React, {Component} from 'react';
import {ImageBackground, StatusBar} from 'react-native';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import Header from './components/Header';
import History from './components/HistoryList';
import {Root} from "native-base";
import {
    Container,
    StyleProvider
} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import PlayButton from "./components/PlayButton";
import OnAir from "./components/OnAir";
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {

    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <Root>
                <StatusBar backgroundColor="#263238" barStyle="light-content" />
                <StyleProvider style={getTheme(material)}>
                    <Container>
                        <ImageBackground source={require('../resourses/img/72859.jpg')}
                                         style={{width: '100%', height: '100%'}}>
                            <Header/>
                            <Grid>
                                <Row size={10}>
                                    <History/>
                                </Row>
                                <Row size={8}>
                                    <Grid>
                                        <Row size={5} style={{justifyContent: 'center', alignItems: 'center'}}>
                                            <PlayButton/>
                                        </Row>
                                        <Row size={3} style={{alignItems: 'flex-start', justifyContent: 'center'}}>
                                            <OnAir/>
                                        </Row>
                                    </Grid>
                                </Row>
                            </Grid>
                        </ImageBackground>
                    </Container>
                </StyleProvider>
            </Root>
        );
    }
}