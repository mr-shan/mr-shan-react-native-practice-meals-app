import { View, Text, StyleSheet } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

interface IProps {
  duration: number;
}

export default (props: IProps) => {
  return (
    <View style={styles.iconWithText}>
      <Ionicons
        style={{ marginRight: 2 }}
        name="md-time-outline"
        size={20}
        color="#b5719a"
      />
      <Text style={styles.footerText}>
        {props.duration}
        <Text style={{ color: "#666", fontSize: 12 }}>m</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconWithText: {
    flexDirection: "row",
    alignItems: "center",
  },
  footerText: {},
});
