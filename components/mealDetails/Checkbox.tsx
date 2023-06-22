import { View, Text, StyleSheet } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

interface IProps {
  title: string;
  checked: boolean;
}

export default (props: IProps) => {
  let icon = null;
  const iconSize = 24;

  if (props.checked) {
    icon = (
      <Ionicons name="checkmark-circle-outline" color="green" size={iconSize} />
    );
  } else {
    icon = <Ionicons name="close-circle-outline" color="red" size={iconSize} />;
  }

  return (
    <View style={styles.container}>
      {icon}
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 1
  },
  title: {
    color: "#333",
    marginLeft: 5,
  },
  icon: {},
});
