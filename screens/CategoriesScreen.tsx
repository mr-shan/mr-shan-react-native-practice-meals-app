import { FlatList, Platform, StyleSheet } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

import CategoryTile from "../components/CategoryTile";

const renderCategoryItem = ({ item }: any) => {
  return <CategoryTile title={item.title} color={item.color} />;
};

export default () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
      style={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    height: "100%",
    paddingTop: Platform.OS === "android" ? 30 : 5,
  },
});
