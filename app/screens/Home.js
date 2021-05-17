import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ImageBackground,
  StatusBar,
} from 'react-native';
import MenuIcon from 'react-native-vector-icons/Ionicons';
import ScanIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const {height} = Dimensions.get('window');
function Home(props) {
  return (
    <View style={styles.view}>
      <StatusBar hidden={true} />
      <View style={styles.header}>
        <ImageBackground
          source={require('../../images/logo.jpg')}
          style={styles.imageBackground}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.openDrawer();
            }}>
            <MenuIcon
              color="white"
              name={'menu'}
              size={40}
              style={{marginLeft: 10}}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Welcome back,</Text>
          <Text style={styles.headerText}>Hassan</Text>
          <View style={styles.viewOfScanning}>
            <View style={styles.textInputView}>
              <TextInput
                placeholder="code / mobile number"
                placeholderTextColor="black"
                keyboardType={'number-pad'}  
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(text) => {}}
                style={styles.inputStyle}
              />
            </View>
            <View style={styles.scan}>
              <TouchableOpacity onPress={() => {
              }}>
                <ScanIcon color="black" name={'barcode-scan'} size={33} />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.pointsView}>
        <Text style={styles.pointText}>Points</Text>
        <View style={styles.rowOfPointsResult}>
          <Text style={styles.points}>10.3207</Text>
          <Text>Points</Text>
        </View>
      </View>
      <Text style={styles.labelOfNumberOfPoints}>Number Of Points</Text>
      <View style={styles.textNumberOfPointInputView}>
        <TextInput
          placeholder="insert number of points"
          placeholderTextColor="grey"
          keyboardType={'number-pad'}
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(text) => {}}
          style={styles.numberOfPointsInputStyle}
        />
      </View>
      <TouchableOpacity onPress={() => {}} style={styles.signupButton}>
        <Text style={{color: '#FFFFFF'}}>Transfer now</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    width: '100%',
    height: height * 0.42,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: 'red',
  },
  imageBackground: {
    flex: 1,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: 'hidden',
  },
  viewOfScanning: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  textInputView: {
    backgroundColor: 'white',
    width: '60%',
    height: 50,
    borderRadius: 10,
    elevation: 0.5,
    marginBottom: 10,
  },
  inputStyle: {
    marginLeft: 10,
    flex: 1,
  },
  scan: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 10,
    elevation: 0.5,
    marginBottom: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pointsView: {
    backgroundColor: '#F2F2F2',
    width: '80%',
    height: 100,
    marginTop: 30,
    borderRadius: 10,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  pointText: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
  rowOfPointsResult: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  points: {
    color: '#F0C13C',
    fontSize: 35,
    fontWeight: 'bold',
    marginRight: 10,
  },
  labelOfNumberOfPoints: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginTop: 40,
    marginBottom: 10,
  },
  textNumberOfPointInputView: {
    backgroundColor: '#F2F2F2',
    width: '80%',
    height: 50,
    borderRadius: 15,
    elevation: 0.5,
    marginBottom: 15,
  },
  numberOfPointsInputStyle: {
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
});
export default Home;
