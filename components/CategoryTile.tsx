import { View, Pressable, StyleSheet, Text, Platform, GestureResponderEvent } from "react-native";

import { shadow } from "../helper/style";

interface IProps {
  title: string;
  color: string;
  onPress: any
}

export default (props: IProps) => {
  const pressableStyles = ({ pressed }) => {
    const styleList = [styles.pressable, { backgroundColor: props.color }]
    if (pressed && Platform.OS === 'ios') styleList.push(styles.pressed)
    return styleList;
  }

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#eee" }}
        style={pressableStyles}
        onPress={props.onPress}
      >
        <Text style={styles.title}>{props.title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    minHeight: 140,
    borderRadius: 20,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    ...shadow,
  },
  pressable: {
    borderRadius: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.9
  },
  pressed: {
    opacity: 0.8,
    shadowColor: '#000',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5
  },
  title: {
    color: "#111",
    fontSize: 18,
    fontWeight: "bold",
    textShadowColor: "#f891b7",
    textShadowRadius: 1
  },
});
