import React from "react";
import { StyleSheet, Text } from "react-native";

function Subtitle({ children }) {
  return <Text style={styles.subtitle}>{children}</Text>;
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 4,
    padding: 6,
    textAlign: "center",
    borderBottomColor: "white",
    borderBottomWidth: 2,
    marginHorizontal: 12,
  },
});
