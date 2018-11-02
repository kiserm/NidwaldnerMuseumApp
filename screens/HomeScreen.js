import React from 'react';
import {Image,StyleSheet,Text,View,TouchableHighlight,Button,Linking} from 'react-native';

export default class HomeScreen extends React.Component {
  // set a title for the navigation bar at the top
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (      
      <View style={styles.wholeScreen}>
        
        {/* Set the Logo of the App and add the link to the website when pressing on the image*/}        
        <View style={styles.imageContainer}>
        <TouchableHighlight
          onPress={()=>{ Linking.openURL('http://www.nidwaldner-museum.ch/')}}>
          <Image
            source={require('../assets/images/nidwaldner-museum-logo.jpg')}
            style={styles.imageStyle}
          />
          </TouchableHighlight>
        </View>
        
        {/*Set the title of the App*/}        
        <View style={styles.welcomeTextContainer}>
          <Text style={styles.welcomeTextFormat}>
            Willkommen beim Nidwaldner Museum!
          </Text>
        </View>     
        
        {/* Set a button to get to the next page where you can find the quizzes */}
        <View style = {styles.toQuizButton}>
          <Button title="Wähle dein Quiz!" color="#fff" onPress={() => this.props.navigation.navigate('QuizList')}/> 
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
  imageContainer: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 20,
  },
  imageStyle: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  welcomeTextContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  welcomeTextFormat: {
    fontSize: 40,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 45,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  toQuizButton: {
    fontSize: 5,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 100,
    marginLeft: 40,
    marginRight: 40,
    backgroundColor: 'rgba(96,100,109, 1)',
    borderColor: 'rgba(96,100,109, 1)',
    borderWidth: 2,
    borderRadius: 10       
  }
});