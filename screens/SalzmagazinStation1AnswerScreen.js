import React from 'react';
import {Image,StyleSheet,Text,View,TouchableHighlight,Button,Linking} from 'react-native';


export default class SalzmagazinStation1AnswerScreen extends React.Component {
  // set a title for the navigation bar at the top
  static navigationOptions = {
    title: 'Salzmagazin Quiz',
  };
  state = {
    username: this.props.navigation.getParam('username'),
    answer: this.props.navigation.getParam('answer'),
  };

  render() {

    if(this.state.answer === 'Winkelriedhaus'){
      return (      
        <View style={styles.wholeScreen}>
          
          <View style={styles.titleView}>
            <Text style={styles.titleText}>
              Station 1 {'\n'}
              Schule damals und heute            
            </Text>          
          </View>  

          <Text style={styles.question}>
          Nun {this.state.username}, gratuliere Du hast diese Frage Richtig beantwortet!
          </Text>

          <View style = {styles.answerButton}>
          <Button title='Weiter' color="#fff" onPress={() => this.props.navigation.navigate('SalzmagazinStation2Question',{ username: this.state.username })}/>
          </View>
        </View>
      )
    }

    else {
      return (      
        <View style={styles.wholeScreen}>
          
          <View style={styles.titleView}>
            <Text style={styles.titleText}>
              Station 1 {'\n'}
              Schule damals und heute            
            </Text>          
          </View>  

          <Text style={styles.question}>
          Nun {this.state.username}, dies war leider die falsche Antwort. Bei der nächsten Frage wirst Du sicher
          besser abschneiden!
          </Text>

          <View style = {styles.answerButton}>
          <Button title='Weiter' color="#fff" onPress={() => this.props.navigation.navigate('SalzmagazinStation2Question',{ username: this.state.username })}/>
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
    alignItems: 'left',
  },
  titleText: {
    fontSize: 30,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 35,
    textAlign: 'left',
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  questionView: {
    alignItems: 'left',
  },
  questionText: {
    fontSize: 18,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 25,
    textAlign: 'left',
    marginHorizontal: 10,
  },
  question: {
    fontSize: 18,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 25,
    textAlign: 'left',
    marginTop:20,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  answerButton: {
    fontSize: 5,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 10,
    backgroundColor: 'rgba(96,100,109, 1)',
    borderColor: 'rgba(96,100,109, 1)',
    borderWidth: 2,
    borderRadius: 10,
  },
  lastAnswerButton: {
    fontSize: 5,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 1000,
    backgroundColor: 'rgba(96,100,109, 1)',
    borderColor: 'rgba(96,100,109, 1)',
    borderWidth: 2,
    borderRadius: 10,       
  },
  imageStyle: {
    width: 120,
    height: 160,
    resizeMode: 'contain',
    marginTop: 3,
  },
  imageView: {
    alignItems: 'center'
  }
});