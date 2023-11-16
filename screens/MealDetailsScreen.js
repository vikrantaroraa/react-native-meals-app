import React, { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetails/Subtitle";
import List from "../components/MealDetails/List";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../store/redux/favourites";
// import { useFavourite } from "../store/context/favourites-context";

function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  // const { ids, addFavourite, removeFavourite } = useFavourite();

  const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);

  const dispatch = useDispatch();

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // const mealIsFavourite = ids.includes(mealId);

  const mealIsFavourite = favouriteMealIds.includes(mealId);

  const changeFavouriteStatusHandler = () => {
    if (mealIsFavourite) {
      // removeFavourite(mealId);
      dispatch(removeFavourite({ id: mealId }));
    } else {
      // addFavourite(mealId);
      dispatch(addFavourite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavourite ? "star" : "star-outline"}
            onPress={changeFavouriteStatusHandler}
            color={"white"}
          />
        );
      },
    });
  }, [changeFavouriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 260,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
