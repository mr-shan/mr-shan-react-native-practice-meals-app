import { View, Platform, StyleSheet, FlatList } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import MealTile from "../components/MealTile";

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

  const renderComponent = ({ item }: any) => {
    const onPressHandler = () => {
      props.navigation.navigate("MealDetails", item);
    };

    return (
      <MealTile
        duration={item.duration}
        imageUrl={item.imageUrl}
        isVegetarian={item.isVegetarian}
        title={item.title}
        onPress={onPressHandler}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={mealsForCategory}
        keyExtractor={(item) => item.id}
        renderItem={renderComponent}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    paddingVertical: 20,
    paddingHorizontal: 14,
  },
});
