/**
 * React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  Platform,
  View,
  ActivityIndicator
} from 'react-native'
import { getTopArtists } from '../api-client'
import ArtistList from '../components/ArtistList'

export default class HomeView extends Component {
  
  state = {
    artists: []
  }

  componentDidMount() {
    getTopArtists()
      .then(data => this.setState({ artists: data }))
  }

  render() {

    const artists = this.state.artists

    return (
      <View style={styles.container}>
        {!artists && <ActivityIndicator size="large"/>}
        {artists && <ArtistList artists={artists} />}        
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
    paddingTop: Platform.select({
      ios: 25,
      android: 0
    })
  },
})
