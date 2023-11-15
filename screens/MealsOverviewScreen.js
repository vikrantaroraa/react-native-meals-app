import React, { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    ({ categoryIds }) => categoryIds.indexOf(catId) >= 0
  );

  useLayoutEffect(() => {
    const { title: categoryTitle } = CATEGORIES.find(
      (category) => category.id === catId
    );

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
