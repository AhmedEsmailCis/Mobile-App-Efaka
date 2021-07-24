import React, { useState } from "react";
import { View, StyleSheet, Dimensions, StatusBar, FlatList } from "react-native";
import { Text, Layout, Modal } from "@ui-kitten/components";
import MenuIcon from "react-native-vector-icons/Ionicons";
import TruckDetails from "./TruckDetails";
import TruckBookingModal from "./TruckBookingModal";

const { width } = Dimensions.get("window");
const array = [1, 2, 3, 4, 5, 6];
function AvailableTrucksScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [truckData, setTruckData] = useState();
  const confirmBooking = (Details) => {
    setTruckData(Details);
    setModalVisible(true);
  };
  return (
    <View style={styles.pageStyle}>
      <StatusBar hidden />
      <TruckBookingModal
        visible={modalVisible}
        truckData={truckData}
        onBackdropPress={() => {
          setModalVisible(false);
        }}
      />
      <Layout style={styles.headerStyle}>
        <MenuIcon name="menu" size={40} style={styles.menuIconStyle} />
        <Text> Available Trucks</Text>
      </Layout>
      <FlatList
        data={array}
        renderItem={({ Details }) => (
          <TruckDetails
            onPress={() => {
              confirmBooking(Details);
            }}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  pageStyle: {
    flex: 1,
    backgroundColor: "white",
    paddingBottom: 30,
  },
  headerStyle: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "11%",
    elevation: 3,
  },
  menuIconStyle: {
    marginLeft: 10,
    marginRight: 10,
  },
});
export default AvailableTrucksScreen;
