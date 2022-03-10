import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Home from './home';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
