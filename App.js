import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CatagoryListItem from "./components/CatagoryListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <CatagoryListItem />
      <CatagoryListItem />
      <CatagoryListItem />
      <CatagoryListItem />
      <CatagoryListItem />
      <CatagoryListItem />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16,
  }
});
