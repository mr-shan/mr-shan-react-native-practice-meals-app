import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Ionicons from "@expo/vector-icons/Ionicons";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryOverviewScreen from "./screens/CategoryOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoriteMealScreen from "./screens/FavoriteMealScreen";

import FavoriteContextProvider from "./store/favorite-context";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
  headerStyle: { backgroundColor: "#7b355f" },
  headerTintColor: "white",
};

interface ITabBarIconProps {
  type: any;
  color: string;
  size: number;
}

const TabBarIcon = (props: ITabBarIconProps) => {
  return <Ionicons name={props.type} color={props.color} size={props.size} />;
};

const TabScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        ...screenOptions,
        headerTitleStyle: { fontSize: 20 },
        tabBarActiveTintColor: "#ee80c0",
        tabBarLabelStyle: { fontSize: 12, fontWeight: "500" },
        tabBarStyle: { backgroundColor: "#111", borderWidth: 0 },
        tabBarItemStyle: { borderRadius: 20 },
      }}
    >
      <Tab.Screen
        name="MealsCategories"
        component={CategoriesScreen}
        options={{
          title: "Categories",
          tabBarIcon: (props) => <TabBarIcon {...props} type="grid" />,
        }}
      />
      <Tab.Screen
        name="FavouriteMeals"
        component={FavoriteMealScreen}
        options={{
          title: "Favorites",
          tabBarIcon: (props) => <TabBarIcon {...props} type="heart" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <FavoriteContextProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
              name="MealsHome"
              component={TabScreens}
              options={{
                headerShown: false,
                headerBackTitleVisible: false,
              }}
            />
            <Stack.Screen
              name="CategoryOverview"
              component={CategoryOverviewScreen}
              options={{
                title: "Category Overview",
                headerBackTitleVisible: false,
              }}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailsScreen}
              options={{
                headerBackTitleVisible: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </View>
    </FavoriteContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
