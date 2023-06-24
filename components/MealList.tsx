import { View, StyleSheet, FlatList } from "react-native";

import MealTile from "../components/MealTile";

import Meal from "../models/meal";
import { useNavigation } from "@react-navigation/native";

interface IProps {
  meals: Array<Meal>
}

export default (props: IProps) => {
  const navigation = useNavigation();

  const renderComponent = ({ item }: any) => {
    const onPressHandler = () => {
      navigation.navigate("MealDetails", item);
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
        data={props.meals}
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
    paddingVertical: 14,
    paddingHorizontal: 10,
  },
});
