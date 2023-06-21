import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryOverviewScreen from "./screens/CategoryOverviewScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Meals Categories" component={CategoriesScreen}/>
            <Stack.Screen name="Category Overview" component={CategoryOverviewScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
