import { useEffect } from "react";
import { Text, StyleSheet, View, Image, ScrollView } from "react-native";

import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import Checkbox from "../components/mealDetails/Checkbox";
import IngredientListItem from "../components/mealDetails/IngredientListItem";
import Header from "../components/mealDetails/Header";
import IngredientList from "../components/mealDetails/IngredientList";
import PreparationSteps from "../components/mealDetails/PreparationSteps";

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
    <ScrollView style={styles.container}>
      <Header
        affordability={mealDetails.affordability}
        complexity={mealDetails.complexity}
        duration={mealDetails.duration}
        imageUri={mealDetails.imageUrl}
        isVegetarian={mealDetails.isVegetarian}
      />

      <View style={styles.moreDetails}>
        <Checkbox checked={mealDetails.isGlutenFree} title="Gluten Free" />
        <Checkbox checked={mealDetails.isVegan} title="Vegan" />
        <Checkbox checked={mealDetails.isLactoseFree} title="Lactose Free" />
      </View>

      <IngredientList ingredients={mealDetails.ingredients} />
      <PreparationSteps steps={mealDetails.steps} />
      <View style={{marginBottom: 32}}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
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
  }
});
