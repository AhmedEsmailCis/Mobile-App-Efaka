import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  StatusBar,
} from 'react-native';
const {height} = Dimensions.get('window');
function Starting(props) {
  return (
    <View style={styles.view}>
      <StatusBar hidden={true} />
      <View style={styles.header}>
        <Image
          source={require('./../../images/logo.jpg')}
          style={styles.header}
        />
      </View>
      <View style={styles.circleView}>
        <Image
          source={require('./../../images/efakka.png')}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.description}>
        <Text style={styles.descTextStyle}>
          Efakka is Lorem lipsum as it is sometimes
        </Text>
        <Text style={styles.descTextStyle}>
          Know, is dummy text used in laying out
        </Text>
        <Text style={styles.descTextStyle}>print, graphic or web designs</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Login');
        }}
        style={styles.loginButton}>
        <Text style={{color: '#FFFFFF'}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('SignUp');
        }}
        style={styles.signupButton}>
        <Text style={{color: '#FFFFFF'}}>Create an Account</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flex:1,
  },
  header: {
    width: '100%',
    height: height * 0.4,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  circleView: {
    width: 100,
    height: 100,
    backgroundColor: '#FFFFFF',
    bottom: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 70,
    height: 70,
    //borderRadius: 10,
  },
  description: {
    alignItems: 'center',
    marginBottom: 20,
  },
  descTextStyle: {
    margin: 2,
    color: 'grey',
  },
  loginButton: {
    backgroundColor: '#EEC23D',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 50,
    borderRadius: 23,
    elevation: 0.5,
    marginBottom: 20,
  },
  signupButton: {
    backgroundColor: '#003C51',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 50,
    borderRadius: 23,
    elevation: 0.5,
    marginBottom: 10,
  },
});
export default Starting;
