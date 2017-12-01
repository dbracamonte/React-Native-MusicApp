/**
 * React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class ArtistBox extends Component {

  constructor(props) {
    super(props)
    this.state = {
      liked: false
    }
  }

  handleLikePress = () => {
    this.setState({ liked: !this.state.liked })
  }

  render() {

    const { image, name, likes, comments } = this.props.artist
    const likeIcon = this.state.liked ?
      <Icon name="ios-heart" size={30} color="#e74c3c" /> :
      <Icon name="ios-heart-outline" size={30} color="#ccc" />

    return (
    <View style={styles.artistBox}>
      <Image
      style={styles.image}
      source={{uri: image}}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={this.handleLikePress} >
              { likeIcon }
            </TouchableOpacity>
            <Text style={styles.count}>{likes}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Icon name="ios-chatboxes-outline" size={30} color="#ccc" />
            <Text style={styles.count}>{comments}</Text>
          </View>
        </View>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  artistBox: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    margin: 4,
    //ForAndroid
    elevation: 3,
    // ForIOS
    shadowColor: '#000000',
    shadowOpacity: .2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
  },
  image: {
    width: 120,
    height: 120
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    color: '#444',
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 60,
    marginVertical: 10,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  count: {
    color: '#ccc'
  }
})
