import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";

import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <CategoriesScreen />
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
