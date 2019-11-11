import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import SkiiImage from "../assets/ski.png";

export default function CatagoryListItem(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catagory List Item </Text>
      <Image style={styles.catagoryImage} source={SkiiImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  catagoryImage: {
    width: 64,
    height: 64,
  },
  title: {
    textTransform: "uppercase",
    marginBottom: 8,
    fontWeight: "700"
  },
  container: {
    alignItems: "center",
    padding: 16,
    borderRadius: 6,
    backgroundColor: 'lightblue',
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    marginBottom: 10,
    shadowOffset: { width: 0, height: 0 }
  }
});
