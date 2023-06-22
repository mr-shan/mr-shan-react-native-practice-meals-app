import { useEffect } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { shadow } from "../helper/style";

import TimeDuration from "../components/mealDetails/TimeDuration";
import VegNonVeg from "../components/mealDetails/VegNonVeg";
import Checkbox from "../components/mealDetails/Checkbox";

import Meal from "../models/meal";

interface IProps {
  route: RouteProp<any>;
  navigation: NativeStackNavigationProp<any, any>;
}

export default (props: IProps) => {
  const mealDetails = props.route.params as Meal;

  useEffect(() => {
    props.navigation.setOptions({ title: mealDetails.title });
  }, []);

  return (
    <View style={styles.container}>
      <Image source={{ uri: mealDetails.imageUrl }} style={styles.image} />

      <View style={styles.details}>
        <VegNonVeg isVeg={mealDetails.isVegetarian} />
        <View style={styles.difficultyTextWrapper}>
          <Text>{mealDetails.affordability.toUpperCase()}, </Text>
          <Text>{mealDetails.complexity.toUpperCase()}</Text>
        </View>
        <TimeDuration duration={mealDetails.duration} />
      </View>

      <View style={styles.moreDetails}>
        <Checkbox checked={mealDetails.isGlutenFree} title="Gluten Free" />
        <Checkbox checked={mealDetails.isVegan} title="Vegan" />
        <Checkbox checked={mealDetails.isLactoseFree} title="Lactose Free" />
      </View>

      <View style={styles.ingredientsContainer}>
        <Text style={styles.title}>Ingredients</Text>
      </View>

      <View style={styles.stepsContainer}>
        <Text style={styles.title}>Steps</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    height: 300,
  },
  difficultyTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
    color: "#999",
  },
  details: {
    ...shadow,
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between",
    padding: 10,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  moreDetails: {
    marginTop: 10,
    padding: 10,
    width: "100%",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "white",
  },
  ingredientsContainer: {
    padding: 10,
    width: '100%',
    backgroundColor: 'white',
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    marginTop: 10,
  },
  stepsContainer: {
    padding: 10,
    width: '100%',
    backgroundColor: 'white',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  }
});
