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
  ScrollView,
} from 'react-native';
import {Text, Layout} from '@ui-kitten/components';
import MenuIcon from 'react-native-vector-icons/Ionicons';
import TruckDetails from './TruckDetails';
const {width} = Dimensions.get('window');
function AvailableTrucksScreen(props) {
  return (
    <View style={styles.pageStyle}>
      <StatusBar hidden={true} />
      <Layout style={styles.headerStyle}>
        <MenuIcon name={'menu'} size={40} style={styles.menuIconStyle} />
        <Text> Available Trucks</Text>
      </Layout>
      <ScrollView>
        <TruckDetails />
        <TruckDetails />
        <TruckDetails />
        <TruckDetails />
        <TruckDetails />
        <TruckDetails />
        <TruckDetails />
      </ScrollView>
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
  backgroundImage: {
    width: width * 0.37,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
  },
  truckContainer: {
    flexDirection: 'row',
    width: '90%',
    margin: 20,
    alignSelf: 'center',
  },
  detailsContainer: {flex: 1, justifyContent: 'space-between'},
  bookButton: {
    width: 100,
    height: 30,
    borderRadius: 3,
    backgroundColor: '#FAD201',
    marginBottom: 5,
  },
  TouchableOpacityBookTruck: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextIconView: {
    flexDirection: 'row',
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginRight: 5,
  },
  companyLogo: {
    width: 50,
    height: 50,
    marginRight: 5,
  },
});
export default AvailableTrucksScreen;
