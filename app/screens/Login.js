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
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
const {height} = Dimensions.get('window');
import {connect} from 'react-redux';
import {loginUser} from './../redux/actions';
function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    if (props.status) {
      props.navigation.navigate('Home');
    }
  });
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
      <Text style={styles.loginText}>Login</Text>
      <View style={styles.textInputView}>
        <TextInput
          placeholder="Your email"
          placeholderTextColor="grey"
          //keyboardType={'number-pad'}
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
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="grey"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(text) => {
            setPassword(text);
          }}
          style={styles.inputStyle}
        />
      </View>
      <TouchableOpacity onPress={() => {}} style={styles.forgetPassword}>
        <Text style={styles.forgetPasswordText}>Forgot you password ?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          if (email === '') {
            ToastAndroid.show('please enter your email', 2000);
          }
          if (password === '') {
            ToastAndroid.show('please enter your password', 2000);
          }
          if (email != '' && password != '') {
            props.loginUser({email, password});
          }
        }}
        style={styles.loginButton}>
        {props.loading ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <Text style={{color: 'white'}}>Login</Text>
        )}
      </TouchableOpacity>
      <View style={styles.accountQuestion}>
        <Text style={styles.haveAccount}>Don't have an Account ? </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('SignUp');
          }}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flex: 1,
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
  loginText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -20,
    marginBottom: 20,
  },
  textInputView: {
    backgroundColor: '#F2F2F2',
    width: '80%',
    height: 50,
    borderRadius: 15,
    elevation: 0.5,
    marginBottom: 10,
  },
  inputStyle: {
    marginLeft: 10,
    flex: 1,
  },
  forgetPassword: {
    width: '80%',
    marginBottom: 20,
  },
  forgetPasswordText: {
    color: 'blue',
  },
  loginButton: {
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
  },
  haveAccount: {
    color: 'grey',
  },
  signUpText: {
    color: 'blue',
    fontWeight: 'bold',
  },
});
const mapStateToProps = (state) => {
  return {
    loading: state.authRdx.loading,
    status: state.authRdx.status,
  };
};
export default connect(mapStateToProps, {loginUser})(Login);
