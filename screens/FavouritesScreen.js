import React from "react";
import MealsList from "../components/MealsList/MealsList";
// import { useFavourite } from "../store/context/favourites-context";
import { MEALS } from "../data/dummy-data";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

function FavouritesScreen() {
  // const { ids } = useFavourite();

  const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);

  // const favouriteMeals = MEALS.filter((meal) => ids.includes(meal.id));
  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealIds.includes(meal.id)
  );

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourite meals!</Text>
      </View>
    );
  }

  return <MealsList items={favouriteMeals} />;
}

export default FavouritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
