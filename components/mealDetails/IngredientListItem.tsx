import { Text, View, StyleSheet } from "react-native";

import IonIcons from "@expo/vector-icons/Ionicons";

interface IProps {
  label: string;
  indicator: any;
}

export default (props: IProps) => {
  let indicator = null;

  if (props.indicator === "icon") {
    indicator = (
      <IonIcons
        name="send-outline"
        size={14}
        color={"#7b355f"}
        style={styles.icon}
      />
    );
  } else {
    indicator = <Text style={styles.indicator}>{indicator}</Text>;
  }

  return (
    <View style={styles.container}>
      <IonIcons
        name="send-outline"
        size={14}
        color={"#7b355f"}
        style={styles.icon}
      />
      <Text style={styles.label}>{props.label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 2,
    flexDirection: "row",
    width: "50%",
  },
  icon: {
    marginRight: 5,
  },
  indicator: {
    fontSize: 16,
    color: "#7b355f",
  },
  label: {
    fontSize: 14,
    color: "#666",
    flexWrap: "wrap",
    flexDirection: "row",
    flex: 1,
  },
});
