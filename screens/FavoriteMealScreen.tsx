import { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";

import { FavoriteContext } from "../store/favorite-context";
import { MEALS } from "../data/dummy-data";
import Meal from "../models/meal";

import MealList from "../components/MealList";

export default () => {
  const favoriteContext = useContext(FavoriteContext);

  const favoriteMeals = favoriteContext.ids.map((id) =>
    MEALS.find((e) => e.id === id)
  ) as Array<Meal>;

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No favorite meal found!</Text>
      </View>
    );
  } else {
    return <MealList meals={favoriteMeals} />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#7b355f",
    fontWeight: '500'
  },
});
