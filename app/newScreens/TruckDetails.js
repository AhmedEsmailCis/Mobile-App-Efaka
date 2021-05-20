import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import {Text, Layout} from '@ui-kitten/components';
import TestIcon from 'react-native-vector-icons/FontAwesome5';
import LocationIcon from 'react-native-vector-icons/Entypo';
const {width} = Dimensions.get('window');
function TruckDetails(props) {
  return (
    <Layout level="1" style={styles.truckContainer}>
      <ImageBackground
        style={styles.backgroundImage}
        source={{
          uri: 'https://almalnews.com/wp-content/uploads/2020/01/%D8%AA%D9%88%D9%8A%D9%88%D8%AA%D8%A7-%D9%87%D8%A7%D9%8A%D9%84%D9%88%D9%83%D8%B3.jpg',
        }}>
        <Text appearance="alternative" category="p1">
          549.99 LE
        </Text>
        <Text appearance="alternative" category="p1">
          Per Day
        </Text>
      </ImageBackground>
      <Layout level="1" style={styles.detailsContainer}>
        <Text category="h6">Truck Name</Text>
        <View style={{flexDirection: 'row'}}>
          <Layout level="2" style={styles.TextIconView}>
            <Text category="s2" style={{marginRight: 5}}>
              5
            </Text>
            <TestIcon name={'temperature-low'} size={20} color="#FAD201" />
          </Layout>
          <Layout level="2" style={styles.TextIconView}>
            <Text category="s2" style={{marginRight: 5}}>
              4
            </Text>
            <TestIcon name={'temperature-low'} size={20} color="#FAD201" />
          </Layout>
          <Layout level="2" style={styles.TextIconView}>
            <Text category="s2" style={{marginRight: 5}}>
              A/c
            </Text>
            <TestIcon name={'temperature-low'} size={20} color="#FAD201" />
          </Layout>
          <Layout level="2" style={styles.TextIconView}>
            <Text category="s2" style={{marginRight: 5}}>
              A/T
            </Text>
            <TestIcon name={'temperature-low'} size={20} color="#FAD201" />
          </Layout>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.companyLogo}
            source={{
              uri: 'https://mostaql.hsoubcdn.com/uploads/643931-RhpRG-1581113767-5e3de1a7d6571.png',
            }}
          />
          <Layout>
            <Text>El Tarek auto</Text>
            <Layout style={{flexDirection: 'row'}}>
              <LocationIcon name={'location-pin'} size={15} />
              <Text category="s2">Nasr City</Text>
            </Layout>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={3}
              selectedStar={(rating) => {}}
              fullStarColor="#FAD201"
              starSize={20}
            />
          </Layout>
        </View>
        <Layout style={styles.bookButton}>
          <TouchableOpacity style={styles.TouchableOpacityBookTruck}>
            <Text>Book Truck</Text>
          </TouchableOpacity>
        </Layout>
      </Layout>
    </Layout>
  );
}
const styles = StyleSheet.create({
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
    width: 60,
    height: 60,
    marginRight: 5,
  },
});
export default TruckDetails;
