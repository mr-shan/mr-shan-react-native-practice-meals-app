import { Text, View, StyleSheet } from "react-native";

export default () => {
  return (
    <View style={styles.container}>
      <Text>This is favourite screen for meals</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#7b355f",
  },
});
