import { Text, StyleSheet, View, Image } from "react-native";

import { shadow } from "../../helper/style";

import TimeDuration from "./TimeDuration";
import VegNonVeg from "./VegNonVeg";

interface IProps {
  imageUri: string;
  isVegetarian: boolean;
  affordability: string;
  complexity: string;
  duration: number;
}

export default (props: IProps) => {
  return (
    <View style={styles.header}>
      <Image source={{ uri: props.imageUri }} style={styles.image} />
      <View style={styles.details}>
        <VegNonVeg isVeg={props.isVegetarian} />
        <View style={styles.difficultyTextWrapper}>
          <Text>{props.affordability.toUpperCase()}, </Text>
          <Text>{props.complexity.toUpperCase()}</Text>
        </View>
        <TimeDuration duration={props.duration} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    ...shadow,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 20
  },
  image: {
    height: 300,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  difficultyTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
    color: "#999",
  },
  details: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between",
    padding: 12,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
});
