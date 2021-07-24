import React from "react";
import { Image, StyleSheet, TouchableOpacity, Dimensions, StatusBar } from "react-native";
import { Text, Layout } from "@ui-kitten/components";
import { IMAGES } from "../common";

const { height } = Dimensions.get("window");
export function Starting(props) {
  return (
    <Layout style={styles.view}>
      <StatusBar hidden />
      <Layout style={styles.header}>
        <Image source={IMAGES.logo} style={styles.header} />
      </Layout>
      <Layout style={styles.circleView}>
        <Image source={IMAGES.efakka} style={styles.imageStyle} />
      </Layout>
      <Layout style={styles.description}>
        <Text style={styles.descTextStyle}>Efakka is Lorem lipsum as it is sometimes</Text>
        <Text style={styles.descTextStyle}>Know, is dummy text used in laying out</Text>
        <Text style={styles.descTextStyle}>print, graphic or web designs</Text>
      </Layout>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Login");
        }}
        style={styles.loginButton}>
        <Text appearance="alternative">Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("SignUp");
        }}
        style={styles.signupButton}>
        <Text appearance="alternative">Create an Account</Text>
      </TouchableOpacity>
    </Layout>
  );
}
const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  header: {
    width: "100%",
    height: height * 0.4,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  circleView: {
    width: 100,
    height: 100,
    backgroundColor: "#FFFFFF",
    bottom: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    width: 70,
    height: 70,
    // borderRadius: 10,
  },
  description: {
    alignItems: "center",
    marginBottom: 20,
  },
  descTextStyle: {
    margin: 2,
    color: "grey",
  },
  loginButton: {
    backgroundColor: "#EEC23D",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 50,
    borderRadius: 23,
    elevation: 0.5,
    marginBottom: 20,
  },
  signupButton: {
    backgroundColor: "#003C51",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 50,
    borderRadius: 23,
    elevation: 0.5,
    marginBottom: 10,
  },
});
