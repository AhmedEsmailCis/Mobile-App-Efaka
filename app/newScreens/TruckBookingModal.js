import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Layout, Modal, Datepicker, Input} from '@ui-kitten/components';
import DateIcon from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
function TruckBookingModal(props) {
  return (
    <Modal
      visible={props.visible}
      onBackdropPress={props.onBackdropPress}
      backdropStyle={styles.modal}>
      <Layout style={styles.modalView}>
        <Layout style={styles.detailsContainer}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://almalnews.com/wp-content/uploads/2020/01/%D8%AA%D9%88%D9%8A%D9%88%D8%AA%D8%A7-%D9%87%D8%A7%D9%8A%D9%84%D9%88%D9%83%D8%B3.jpg',
            }}
          />
          <Layout>
            <Text>Truk Name</Text>
            <Layout style={styles.companyContainer}>
              <Image
                style={styles.companyLogo}
                source={{
                  uri: 'https://mostaql.hsoubcdn.com/uploads/643931-RhpRG-1581113767-5e3de1a7d6571.png',
                }}
              />
              <Text style={styles.companyName}>El Tarek Auto</Text>
            </Layout>
          </Layout>
        </Layout>
        <Layout style={styles.rowBetweenTriangles}>
          <Triangle style={styles.leftTriangle} />
          <Triangle style={styles.rightTriangle} />
        </Layout>
        <Input
          placeholder="Arrival Location"
          size="small"
          style={styles.input}
        />
        <Datepicker
          placeholder="Arrival Date-time"
          size="small"
          accessoryRight={() => (
            <DateIcon color="black" size={20} name="date-range" />
          )}
          style={styles.datePicker}
        />
        <Datepicker
          placeholder="Return Date-time"
          size="small"
          accessoryRight={() => (
            <DateIcon color="black" size={20} name="date-range" />
          )}
          style={styles.datePicker}
        />
        <Layout style={styles.rowBetweenTriangles}>
          <Triangle style={styles.leftTriangle} />
          <Triangle style={styles.rightTriangle} />
        </Layout>
        <Layout style={styles.rowBetweenLabelPrice}>
          <Text>5 days</Text>
          <Text appearance="hint">1500 LE</Text>
        </Layout>
        <Layout level="4" style={styles.line} />
        <Layout style={styles.rowBetweenLabelPrice}>
          <Text>Total</Text>
          <Text appearance="hint">2300 LE</Text>
        </Layout>
        <Layout style={styles.buttonStyle}>
          <TouchableOpacity style={styles.TouchStyle}>
            <Text>Confirm Booking</Text>
          </TouchableOpacity>
        </Layout>
      </Layout>
    </Modal>
  );
}
const styles = StyleSheet.create({
  modal: {backgroundColor: 'rgba(52, 52, 52, 0.3)'},
  modalView: {
    width: wp('80%'),
    height: hp('70%'),
    borderRadius: 5,
    alignItems: 'center',
  },
  detailsContainer: {
    height: '20%',
    flexDirection: 'row',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '10%',
    marginBottom: '5%',
  },
  image: {
    width: '40%',
    height: '100%',
    marginRight: '2%',
  },
  companyContainer: {
    flexDirection: 'row',
    marginTop: hp('3'),
  },
  companyLogo: {
    width: '45%',
    height: '100%',
  },
  companyName: {
    fontSize: hp('1.5'),
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: wp('2'),
    borderRightWidth: wp('2'),
    borderBottomWidth: wp('4'),
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  rowBetweenTriangles: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  leftTriangle: {
    borderBottomColor: 'black',
    transform: [{rotate: '90deg'}],
  },
  rightTriangle: {borderBottomColor: 'grey', transform: [{rotate: '-90deg'}]},
  input: {
    paddingLeft: wp('5'),
    paddingRight: wp('5'),
    marginBottom: hp('2'),
  },
  datePicker: {
    paddingLeft: wp('5'),
    paddingRight: wp('5'),
    width: '100%',
    marginBottom: hp('2'),
  },
  rowBetweenLabelPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: wp('5'),
    paddingRight: wp('5'),
    width: '100%',
  },
  line: {
    height: 2,
    width: '90%',
    marginBottom: hp('1'),
    marginTop: hp('1'),
  },
  buttonStyle: {
    backgroundColor: '#FAD201',
    margin: hp('3'),
    width: wp('70'),
    height: hp('6'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  TouchStyle: {
    width: wp('70'),
    height: hp('6'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default TruckBookingModal;
const Triangle = (props) => {
  return <View style={[styles.triangle, props.style]} />;
};
