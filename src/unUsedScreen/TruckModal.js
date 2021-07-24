import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Layout, Modal, Select, SelectItem } from "@ui-kitten/components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function TruckModal({ visible, onBackdropPress }) {
  const [selectedIndex, setSelectedIndex] = useState("");
  return (
    <Modal
      visible={visible}
      onBackdropPress={onBackdropPress}
      backdropStyle={{ backgroundColor: "rgba(52, 52, 52, 0.3)" }}>
      <Layout style={styles.modalView}>
        <Image
          source={{
            uri: "https://www.iconpacks.net/icons/1/free-car-icon-1057-thumb.png",
          }}
          style={styles.image}
        />
        <Text category="h6">Find a tow truck</Text>
        <Layout level="2" style={styles.oval} />
        <Select
          selectedIndex={selectedIndex}
          placeholder="Pickup Location"
          style={styles.pickerStyle}
          onSelect={(i) => {
            setSelectedIndex(i);
          }}>
          <SelectItem title="option 1" />
          <SelectItem title="option 2" />
          <SelectItem title="option 3" />
        </Select>
        <Select placeholder="Car Model" style={styles.pickerStyle} />
        <Select placeholder="Car Type" style={styles.pickerStyle} />
        <Layout style={styles.buttonStyle}>
          <TouchableOpacity style={styles.TouchStyle}>
            <Text>continue reservation</Text>
          </TouchableOpacity>
        </Layout>
      </Layout>
    </Modal>
  );
}
const styles = StyleSheet.create({
  modalView: {
    width: wp("81%"),
    height: hp("55%"),
    borderRadius: 5,
    alignItems: "center",
    paddingTop: hp("6"),
  },
  image: {
    width: wp("22%"),
    height: hp("12"),
    borderRadius: 50,
    top: hp("-4"),
    position: "absolute",
    backgroundColor: "white",
  },
  pickerStyle: {
    width: wp("70"),
    marginTop: hp("3"),
  },
  buttonStyle: {
    backgroundColor: "#FAD201",
    marginTop: hp("3"),
    width: wp("70"),
    height: hp("6"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  TouchStyle: {
    width: wp("70"),
    height: hp("6"),
    justifyContent: "center",
    alignItems: "center",
  },
  oval: {
    width: wp("9%"),
    height: hp("3"),
    borderRadius: 30,
    transform: [{ scaleX: 6 }],
  },
});
export default TruckModal;
