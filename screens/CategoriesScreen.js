import React from "react";
import { FlatList, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryTile from "../components/CategoryTile";

const renderCategoryItem = (itemData) => {
  return (
    <CategoryTile title={itemData.item.title} color={itemData.item.color} />
  );
};

function CategoriesScreen() {
  return (
    <>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
        horizontal={false}
      />
    </>
  );
}

export default CategoriesScreen;
