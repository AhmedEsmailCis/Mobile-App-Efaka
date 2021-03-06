import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Text, Layout } from "@ui-kitten/components";

function ServiceButton({ uri, text, onPress }) {
  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={onPress}>
      <Layout style={styles.serviceContainer} level="2">
        <Image
          source={{
            uri,
          }}
          style={styles.image}
        />
        <Text category="c1">{text}</Text>
      </Layout>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  serviceContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    margin: 20,
    borderRadius: 5,
    paddingBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
});
export default ServiceButton;
