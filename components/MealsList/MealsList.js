import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";
import { useNavigation } from "@react-navigation/native";

function MealsList({ items }) {
  const navigation = useNavigation();

  const renderMealItem = (itemData) => {
    const { title, imageUrl, duration, complexity, affordability } =
      itemData.item;

    const pressHandler = () => {
      navigation.navigate("MealDetails", {
        mealId: itemData.item.id,
      });
    };

    return (
      <MealItem
        title={title}
        imageUrl={imageUrl}
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        onPress={pressHandler}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
