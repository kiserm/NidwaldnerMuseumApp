import React from 'react';
import {StyleSheet,Text,View,Button} from 'react-native';

export default class QuizListScreen extends React.Component {  
  static navigationOptions = {
    title: 'Wähle dein Quiz!',
  };
  render() {    
    return (
      <View style={styles.wholeScreen}>

        {/*Set the title of the screen*/}        
        <View style={styles.titleView}>
          <Text style={styles.titleText}>
            Wähle dein Quiz!
          </Text>
        </View>   

        {/* Set a button to get to the userForm with a state (handed parameter) which quiz the user has chosen
        for more information about parameters while routing through screens see
        https://reactnavigation.org/docs/en/params.html */}
        <View style = {styles.toQuizButtonFirst}>
          <Button title="Festung Fürigen" color="#fff" onPress={() => this.props.navigation.navigate('UserForm',{ QuizName: 'Festung' })}/> 
        </View>

        {/* Set a button to get to the userForm with a state which quiz the user has chosen */}
        <View style = {styles.toQuizButtonRest}>
          <Button title="Salzmagazin" color="#fff" onPress={() => this.props.navigation.navigate('UserForm',{ QuizName: 'Salzmagazin' })}/> 
        </View>

        {/* Set a button to get to the userForm with a state which quiz the user has chosen */}
        <View style = {styles.toQuizButtonLast}>
          <Button title="Winkelriedhaus" color="#fff" onPress={() => this.props.navigation.navigate('UserForm',{ QuizName: 'Winkelriedhaus' })}/> 
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
  toQuizButtonFirst: {
    fontSize: 5,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 100,
    marginLeft: 40,
    marginRight: 40,
    backgroundColor: 'rgba(96,100,109, 1)',
    borderColor: 'rgba(96,100,109, 1)',
    borderWidth: 2,
    borderRadius: 10       
  },
  toQuizButtonRest: {
    fontSize: 5,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 50,
    marginLeft: 40,
    marginRight: 40,
    backgroundColor: 'rgba(96,100,109, 1)',
    borderColor: 'rgba(96,100,109, 1)',
    borderWidth: 2,
    borderRadius: 10       
  },
  toQuizButtonLast: {
    fontSize: 5,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 50,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 200,
    backgroundColor: 'rgba(96,100,109, 1)',
    borderColor: 'rgba(96,100,109, 1)',
    borderWidth: 2,
    borderRadius: 10       
  },
});