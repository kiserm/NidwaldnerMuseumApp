import React from 'react';
import {Image,StyleSheet,Text,View,TouchableHighlight,Button,Linking} from 'react-native';

export default class FestungHomeScreen extends React.Component {
  // set a title for the navigation bar at the top
  static navigationOptions = {
    title: 'Festung Fürigen Quiz',
  };

  state = {
    username: this.props.navigation.getParam('Username'),
  };

  render() {
    return (      
      <View style={styles.wholeScreen}>
        
        <View style={styles.welcomeTextContainer}>
          <Text>
            {this.state.username} festig
          </Text>
        </View>     
        
      </View>
    );
  }
}

/* the styles list */
const styles = StyleSheet.create({
  wholeScreen: {
    backgroundColor: '#fff',
  },
  welcomeTextContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  welcomeTextFormat: {
    fontSize: 35,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 45,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});