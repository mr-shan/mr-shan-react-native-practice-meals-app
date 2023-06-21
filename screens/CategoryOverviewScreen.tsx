import { View, Text, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";
import Meal from "../models/meal";

interface IProps {}

export default ({ route }) => {
  const categoryDetails = route.params;
  const mealsForCategory = MEALS.filter((mealItem: Meal) =>
    mealItem.categoryIds.includes(categoryDetails.id)
  );

  return (
    <View style={styles.container}>
      <Text>Inside the category overview screen</Text>
      {
        mealsForCategory.map((item: Meal) => <Text>{item.title}</Text>)
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
