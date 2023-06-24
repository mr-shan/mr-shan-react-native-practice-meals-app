import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import MealList from "../components/MealList";

import { MEALS } from "../data/dummy-data";
import Meal from "../models/meal";
import { useEffect } from "react";

interface IProps {
  route: RouteProp<any>;
  navigation: NativeStackNavigationProp<any, any>;
}

export default (props: IProps) => {
  const categoryDetails = props.route.params;
  const mealsForCategory = MEALS.filter((mealItem: Meal) =>
    mealItem.categoryIds.includes(categoryDetails?.id)
  );

  useEffect(() => {
    props.navigation.setOptions({
      title: categoryDetails?.title,
      headerTintColor: "black",
      headerStyle: { backgroundColor: categoryDetails?.color },
    });
  }, []);

  return (
    <MealList meals={mealsForCategory}/>
  );
};