import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;
  return (
    <View style={styles.constainer}>
      <Text>MealsOverviewScreen - {catId} </Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    padding: 16,
  },
});
