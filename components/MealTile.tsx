import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";

import VegNonVeg from "./mealDetails/VegNonVeg";
import TimeDuration from "./mealDetails/TimeDuration";

import { shadow } from "../helper/style";

interface IProps {
  title: string;
  imageUrl: string;
  duration: number;
  isVegetarian: boolean;
  onPress: any;
}

export default (props: IProps) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={props.onPress}
        style={({ pressed }) => (pressed ? styles.pressed : null)}
        android_ripple={{ color: "#ccc" }}
      >
        <Image source={{ uri: props.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.footer}>
          <VegNonVeg isVeg={props.isVegetarian} />
          <TimeDuration duration={props.duration} />
        </View>
      </Pressable>
    </View>
  );
};

const borderRadius = 10;

const styles = StyleSheet.create({
  container: {
    borderRadius: borderRadius,
    flex: 1,
    marginBottom: 20,
    backgroundColor: "white",
    ...shadow,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  pressed: {
    opacity: 0.8,
  },
  image: {
    height: 200,
    width: "100%",
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    marginBottom: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
  footer: {
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
  }
});
