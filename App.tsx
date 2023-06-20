import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  return (
    <View style={styles.container}>
        <CategoriesScreen />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
