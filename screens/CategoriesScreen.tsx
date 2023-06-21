import { FlatList, StyleSheet, ImageBackground } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

import { LinearGradient } from "expo-linear-gradient";

import CategoryTile from "../components/CategoryTile";
import Category from "../models/category";

export default ({ navigation }) => {
  const navigationHandler = (item: Category) => {
    navigation.navigate('Category Overview', item);
  };

  const renderCategoryItem = ({ item }: any) => {
    const onPressHandler = () => {
      navigationHandler(item);
    };

    return (
      <CategoryTile
        title={item.title}
        color={item.color}
        onPress={onPressHandler}
      />
    );
  };

  return (
    <LinearGradient colors={["#003546", "#480328"]} style={{ flex: 1 }}>
      <ImageBackground
        source={require("./../assets/images/background5.jpg")}
        resizeMode="cover"
        imageStyle={{ opacity: 0.6 }}
        style={{ flex: 1 }}
      >
        <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item.id}
          renderItem={renderCategoryItem}
          numColumns={2}
          style={styles.listContainer}
          contentContainerStyle={{ paddingVertical: 20 }}
        />
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
