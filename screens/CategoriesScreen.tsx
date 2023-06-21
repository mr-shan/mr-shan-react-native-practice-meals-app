import {
  FlatList,
  Platform,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";

import { LinearGradient } from "expo-linear-gradient";

import CategoryTile from "../components/CategoryTile";

const renderCategoryItem = ({ item }: any) => {
  return <CategoryTile title={item.title} color={item.color} />;
};

export default () => {
  return (
    <LinearGradient colors={["#003546", "#480328"]} style={{ flex: 1 }}>
      <ImageBackground
        source={require("./../assets/images/background5.jpg")}
        resizeMode="cover"
        imageStyle={{ opacity: 0.6 }}
        style={{ flex: 1 }}
      >
        {/* <SafeAreaView style={{paddingTop: 30}}> */}
          <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
            style={styles.listContainer}
            contentContainerStyle={{paddingVertical: 20}}
          />
        {/* </SafeAreaView> */}
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
