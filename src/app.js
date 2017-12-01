/**
 * React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  Platform
} from 'react-native'
import { Scene, Router } from 'react-native-router-flux';
import LoginView from './views/LoginView'
import HomeView from './views/HomeView'
import ArtistDetailView from './views/ArtistDetailView'

class MyMusicApp extends React.Component {
  render() {

    isAndroid = Platform.OS === 'android'

    return <Router>

      <Scene key="root">
        <Scene key="login" component={LoginView} hideNavBar />
        <Scene key="home" component={HomeView} hideNavBar />
        <Scene key="artistDetail" component={ArtistDetailView} hideNavBar={false} title={'Artist Detail'} />
      </Scene>
    </Router>
  }

}

AppRegistry.registerComponent('MyMusicApp', () => MyMusicApp)
