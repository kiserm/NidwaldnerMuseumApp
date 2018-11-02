import React from 'react';
import {Image,StyleSheet,Text,View,TouchableHighlight,Button,Linking} from 'react-native';


export default class UserFormScreen extends React.Component {
  static navigationOptions = {
    title: 'Wie heisst Du?',
  };

  render() {
    
    if(this.props.navigation.getParam('QuizName') === 'Festung'){
      return (
        <View style={styles.wholeScreen}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>
              Willkommen in der Festung Fürigen
            </Text>
            <Text style={styles.questionText}>
              Dein Name:
            </Text>
          </View>          
        </View>  
      );
    }
    else if (this.props.navigation.getParam('QuizName') === 'Salzmagazin'){
      return (
        <View style={styles.wholeScreen}>
          <View style={styles.titleView}>
          <Text style={styles.titleText}>
              Willkommen im Salzmagazin
            </Text>
            <Text style={styles.questionText}>
              Dein Name:
            </Text>
          </View>          
        </View>
      );
    }
    else if (this.props.navigation.getParam('QuizName') === 'Winkelriedhaus'){
      return (
        <View style={styles.wholeScreen}>
          <View style={styles.titleView}>
          <Text style={styles.titleText}>
              Willkommen im Winkelriedhaus
            </Text>
            <Text style={styles.questionText}>
              Dein Name:
            </Text>
          </View>          
        </View>
      );
    }
    else{
      return (
        <View style={styles.wholeScreen}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>
              Error: This QuizName does not exist.
            </Text>
          </View>          
        </View> 
        );
    }
  }
}

/* the styles list */
const styles = StyleSheet.create({
  wholeScreen: {
    backgroundColor: '#fff',
  },
  titleView: {
    alignItems: 'center',
    marginHorizontal: 50,
    marginTop: 100,
  },
  titleText: {
    fontSize: 35,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 45,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  questionText: {
    fontSize: 20,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 45,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});