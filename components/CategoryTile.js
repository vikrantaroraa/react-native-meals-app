import React from "react";
import { Pressable, Text, View } from "react-native";

function CategoryTile({ title, color }) {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryTile;
