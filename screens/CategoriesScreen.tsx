import { FlatList, StyleSheet, ImageBackground, Platform } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { CATEGORIES } from "../data/dummy-data";

import { LinearGradient } from "expo-linear-gradient";

import CategoryTile from "../components/CategoryTile";
import Category from "../models/category";

interface IPageProps {
  navigation: NativeStackNavigationProp<any, any>;
}


export default (props: IPageProps ) => {
  const navigationHandler = (item: Category) => {
    props.navigation.navigate('CategoryOverview', item);
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
          contentContainerStyle={styles.flatListContainer}
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
  flatListContainer: {
    paddingVertical: 20,
    // paddingTop: Platform.OS === 'ios' ? 110 : 20
  }
});
