import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {Text, Layout} from '@ui-kitten/components';
import ServicesButton from './ServicesButton';
import MenuIcon from 'react-native-vector-icons/Ionicons';
const {height} = Dimensions.get('window');

function HomeScreen(props) {
  return (
    <View style={styles.pageStyle}>
      <StatusBar hidden={true} />
      <Layout style={styles.headerStyle}>
        <MenuIcon name={'menu'} size={40} style={styles.menuIconStyle} />
        <Text> Home</Text>
      </Layout>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={{
            uri: 'https://img.freepik.com/free-vector/yellow-background-abstract-gradient-studio-room_28629-428.jpg?size=626&ext=jpg',
          }}>
          <Text category="s1">Hi, Ahmed</Text>
          <Text category="h4">Welcome back </Text>
        </ImageBackground>
      </View>
      <Text style={styles.serviceText} category="h6">
        Services
      </Text>
      <View style={styles.rowOfServiceContainer}>
        <ServicesButton
          text="cap services"
          uri="https://www.iconpacks.net/icons/1/free-car-icon-1057-thumb.png"
        />
        <ServicesButton
          text="Twoing Truck"
          uri="https://www.iconpacks.net/icons/1/free-car-icon-1057-thumb.png"
        />
      </View>
      <View style={styles.rowOfServiceContainer}>
        <ServicesButton
          text="Rent Equipment"
          uri="https://www.iconpacks.net/icons/1/free-car-icon-1057-thumb.png"
        />
        <ServicesButton
          text="Parcel"
          uri="https://www.iconpacks.net/icons/1/free-car-icon-1057-thumb.png"
        />
      </View>
      <View style={styles.rowOfServiceContainer}>
        <ServicesButton
          text="Rent Truck"
          uri="https://www.iconpacks.net/icons/1/free-car-icon-1057-thumb.png"
        />
        <ServicesButton
          text="Rent Car"
          uri="https://www.iconpacks.net/icons/1/free-car-icon-1057-thumb.png"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  pageStyle: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 30,
  },
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '11%',
    elevation: 3,
  },
  menuIconStyle: {
    marginLeft: 10,
    marginRight: 10,
  },
  container: {
    width: '90%',
    height: '20%',
    margin: 20,
    alignSelf: 'center',
    borderRadius: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingBottom: 10,
    overflow: 'hidden',
    borderRadius: 10,
  },
  serviceText: {
    marginLeft: 25,
    fontWeight: 'bold',
  },
  rowOfServiceContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  serviceContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 20,
    borderRadius: 10,
  },
});
export default HomeScreen;
