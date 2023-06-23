import { Text, StyleSheet, View } from "react-native";

import IngredientListItem from "./IngredientListItem";
import CardWithTitle from "./CardWithTitle";

interface IProps {
  ingredients: Array<string>;
}

export default (props: IProps) => {
  return (
    <CardWithTitle title="Ingredients">
      <View style={styles.ingredientsList}>
        {props.ingredients.map((item, index) => (
          <IngredientListItem label={item} key={index} indicator="icon" />
        ))}
      </View>
    </CardWithTitle>
  );
};

const styles = StyleSheet.create({
  ingredientsList: {
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    padding: 2,
    rowGap: 8,
  },
});
