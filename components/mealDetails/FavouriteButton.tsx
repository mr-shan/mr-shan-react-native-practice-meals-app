import { Pressable } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

interface IProps {
  isFavourite: Boolean;
  onPress: any;
}

export default (props: IProps) => {
  const iconName = props.isFavourite ? "heart" : "heart-outline";
  const iconColor = props.isFavourite ? "white" : "#999";
  return (
    <Pressable onPress={props.onPress}>
      <Ionicons name={iconName} color={iconColor} size={24} />
    </Pressable>
  );
};
