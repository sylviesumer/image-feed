import React, {Component} from 'react';
import Constants  from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from './components/Avatar';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Avatar initials="SS" size={35} backgroundColor='teal' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.StatusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
  }
});