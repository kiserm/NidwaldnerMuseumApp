import React from 'react';
import {Image,StyleSheet,Text,View,TouchableHighlight,Button,Linking} from 'react-native';


export default class SalzmagazinHomeScreen extends React.Component {
  // set a title for the navigation bar at the top
  static navigationOptions = {
    title: 'Salzmagazin Quiz',
  };
  state = {
    username: this.props.navigation.getParam('Username'),
  };

  render() {
    return (      
      <View style={styles.wholeScreen}>
        
        <View style={styles.titleView}>
          <Text style={styles.titleText}>
            Station 1 {'\n'}
            Schule damals und heute            
          </Text>          
        </View>  

        <View>
          <Text style={styles.questionText}>
            Die abgebildete Person hiess Melchior Lussi und war ein einflussreicher Mann, 
            der im Kanton Nidwalden viele wichtige Aufgaben übernahm. Auf dem Bild ist der 
            Entwurf zu sehen, was er in Stans bauen liess.
          </Text>

          <View style={styles.imageView}>
            <Image
              source={require('../assets/images/Salzmagazin_Station_1.jpg')}
              style={styles.imageStyle}
            />
          </View>          

          <View style = {styles.toQuestionButton}>
            <Button title="zur Frage" color="#fff" onPress={() => this.props.navigation.navigate('SalzmagazinStation1Frage',{ Username: this.state.username })}/> 
          </View>  

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
    alignItems: 'left',
  },
  titleText: {
    fontSize: 30,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 35,
    textAlign: 'left',
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
  questionText: {
    fontSize: 18,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 25,
    textAlign: 'left',
    marginHorizontal: 15,
  },
  question: {
    fontSize: 18,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 25,
    textAlign: 'left',
    marginTop:20,
  },
  toQuestionButton: {
    fontSize: 5,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 1000,
    backgroundColor: 'rgba(96,100,109, 1)',
    borderColor: 'rgba(96,100,109, 1)',
    borderWidth: 2,
    borderRadius: 10,       
  },
  imageStyle: {
    width: 200,
    height: 260,
    resizeMode: 'contain',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    alignItems: 'center',
    marginHorizontal: 50,
  }
});