/**
 * React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { getTopArtists } from '../api-client'
import ArtistBox from '../components/ArtistBox'

export default class ArtistDetailView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: null
    }
  }

  handleSend = () => {
    console.warn('Enviar ', this.state.text)
    this.setState({ text: '' })
  }

  handleChangeText = (text) => this.setState({text})
  
  render() {
    const artist = this.props.artist

    return (
      <View style={styles.container}>
        <ArtistBox artist={artist} />
        <Text style={styles.header} >Comentarios</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputComment}
            placeholder="¡Deja tu comentario!"
            onChangeText={this.handleChangeText}
            value={this.state.text}
          />
          <TouchableOpacity onPress={this.handleSend} >
            <Icon name="ios-send-outline" size={30} color="#444" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
    paddingTop: 56
  },
  header: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: '#fff',
    paddingHorizontal: 4
  },
  inputComment: {
    flex: 1
  }
})
