import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  StatusBar,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {registerUser} from './../redux/actions';
const {height} = Dimensions.get('window');
import {connect} from 'react-redux';
function SignUp(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  useEffect(() => {
    if (props.status) {
      props.navigation.navigate('Home');
    }
  });
  return (
    <View style={styles.view}>
      <ScrollView contentContainerStyle={{justifyContent: 'center'}}>
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
        <Text style={styles.signupText}>Sign Up</Text>
        <Text style={styles.addingMobile}>
          Add your mobile number to Sign Up
        </Text>
        <View style={styles.textInputView}>
          <TextInput
            placeholder="Your name"
            placeholderTextColor="grey"
            //keyboardType={'number-pad'}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => {
              setName(text);
            }}
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.textInputView}>
          <TextInput
            placeholder="Your email"
            placeholderTextColor="grey"
            keyboardType={'email-address'}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => {
              setEmail(text);
            }}
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.textInputView}>
          <TextInput
            placeholder="Your password"
            placeholderTextColor="grey"
            //keyboardType={'number-pad'}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => {
              setPassword(text);
            }}
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.textInputView}>
          <TextInput
            placeholder="Your mobile"
            placeholderTextColor="grey"
            keyboardType={'number-pad'}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => {
              setMobile(text);
            }}
            style={styles.inputStyle}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            props.registerUser({name, email, password, mobile});
          }}
          style={styles.signupButton}>
          {props.loading ? (
            <ActivityIndicator size="small" color="#0000ff" />
          ) : (
            <Text style={{color: '#FFFFFF'}}>Sign Up</Text>
          )}
        </TouchableOpacity>
        <View style={styles.accountQuestion}>
          <Text style={styles.haveAccount}>Already Have an Account ? </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Login');
            }}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
const mapStateToProps = (state) => {
  return {
    loading: state.authRdx.loading,
    status: state.authRdx.status,
  };
};
export default connect(mapStateToProps, {registerUser})(SignUp);

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    //alignItems: 'center',
  },
  header: {
    backgroundColor: 'red',
    width: '100%',
    height: height * 0.33,
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
    //borderRadius: 50,
  },
  signupText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -20,
  },
  addingMobile: {
    color: 'grey',
    marginBottom: 20,
  },
  textInputView: {
    backgroundColor: '#F2F2F2',
    width: '80%',
    height: 50,
    borderRadius: 15,
    elevation: 0.5,
    marginBottom: 15,
  },
  inputStyle: {
    marginLeft: 10,
    flex: 1,
  },
  signupButton: {
    backgroundColor: '#003C51',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 50,
    borderRadius: 15,
    elevation: 0.5,
    marginBottom: 10,
  },
  accountQuestion: {
    flexDirection: 'row',
    marginTop: 20,
  },
  haveAccount: {
    color: 'grey',
  },
  loginText: {
    color: 'blue',
    fontWeight: 'bold',
  },
});
