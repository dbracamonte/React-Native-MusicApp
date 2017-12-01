/**
 * React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  Text,
  Button
} from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class LoginView extends Component {
  
  goToHome() {
    Actions.home()
  }

  render() {

    return (
      <Image source={ require('../images/background.jpg') } style={styles.container}>
        <Text style={styles.welcome}>
          Bienvenido a MyMusicApp
        </Text>
        <Image source={require('../images/logo.png')} style={styles.logo} />
        <Button
          onPress={() => this.goToHome()}
          title="Go to home"
          color="#008080"
        />
      </Image>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
    justifyContent: 'center',
    alignItems: 'center',
    height: null,
    width: null
  },
  logo: {
    height: 150,
    width: 150,
    marginVertical: 10,
  },
  welcome: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    backgroundColor: 'transparent'
  }
})
