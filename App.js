import React, {Component} from 'react';

import {StyleSheet, Text, TouchableOpacity, View, ScrollView, Alert} from 'react-native';

class MainView extends Component {


  render() {
    return (
        <View style={styles.container}>
          <Header style={styles.title}>react-native-sound-demo</Header>
          <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
            {audioTests.map(testInfo => {
              return (
                  <Feature
                      status={this.state.tests[testInfo.title]}
                      key={testInfo.title}
                      title={testInfo.title}
                      onPress={() => {
                        return playSound(testInfo, this);
                      }}
                  />
              );
            })}
            <Feature title="mp3 in bundle (looped)" buttonLabel={'STOP'} onPress={this.stopSoundLooped} />
          </ScrollView>
        </View>
    );
  }
}

export default MainView;