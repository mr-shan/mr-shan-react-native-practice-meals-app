import { View, Platform, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface IProps {
  isVeg: boolean;
}

export default (props: IProps) => {
  let vegNonVegIcon = null;

  if (props.isVeg) {
    vegNonVegIcon = (
      <View style={[styles.vegNonVegIconContainer, { borderColor: "red" }]}>
        <Ionicons
          style={{ borderColor: "red" }}
          name="triangle"
          color="red"
          size={13}
        />
      </View>
    );
  } else {
    vegNonVegIcon = (
      <View
        style={[
          styles.vegNonVegIconContainer,
          { borderColor: "green", paddingLeft: Platform.OS === "ios" ? 2 : 1 },
        ]}
      >
        <Ionicons
          style={{ borderColor: "green" }}
          name="ellipse"
          color="green"
          size={13}
        />
      </View>
    );
  }

  return vegNonVegIcon;
};

const styles = StyleSheet.create({
  vegNonVegIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderWidth: 1,
    width: 20,
    height: 20,
  },
});
