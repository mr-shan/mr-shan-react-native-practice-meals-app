import { Text, View, StyleSheet } from "react-native";

import IonIcons from "@expo/vector-icons/Ionicons";

interface IProps {
  label: string;
  indicator: any;
}

export default (props: IProps) => {
  return (
    <View style={styles.container}>
      <IonIcons
        name="caret-forward"
        size={14}
        color={"#348578"}
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
    alignItems: 'stretch',
    
  },
  icon: {
    marginRight: 5,
    paddingTop: 3
  },
  label: {
    fontSize: 16,
    lineHeight: 20,
    color: "#666",
    flexWrap: "wrap",
    flexDirection: "row",
    flex: 1,
  },
});
