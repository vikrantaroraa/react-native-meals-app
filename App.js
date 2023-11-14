import { Button, StyleSheet, Text } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouritesScreen from "./screens/FavouritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { FavouritesProvider } from "./store/context/favourites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    // <NavigationContainer>
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ff5f4d",
        },
        headerTintColor: "#fff",
        // The work of contentStyle is done by sceneContainerStyle in the Drawer navigator
        sceneContainerStyle: {
          backgroundColor: "#f7a097",
        },
        drawerContentStyle: { backgroundColor: "#f7c3be" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#ff5f4d",
        drawerActiveBackgroundColor: "#e4958e",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
    // </NavigationContainer>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <FavouritesProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#ff5f4d",
              },
              headerTintColor: "#fff",
              contentStyle: {
                backgroundColor: "#f7a097",
              },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailsScreen}
              options={{ title: "Meal Details" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouritesProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
