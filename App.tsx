import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryOverviewScreen from "./screens/CategoryOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  let screenOptions = {};

  screenOptions = {
    headerStyle: { backgroundColor: "#7b355f" },
    headerTintColor: "white",
  };

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "Meal Categories",
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="CategoryOverview"
            component={CategoryOverviewScreen}
            options={{
              title: "Category Overview",
            }}
          />
          <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
