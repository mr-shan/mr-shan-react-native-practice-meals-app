import { Text, StyleSheet, View } from "react-native";

import CardWithTitle from "./CardWithTitle";

interface IProps {
  steps: Array<string>;
}

export default (props: IProps) => {
  return (
    <CardWithTitle title="Steps to Prepare">
      <View style={styles.ingredientsList}>
        {props.steps.map((item, index) => (
          <View style={styles.stepContainer} key={index}>
            <Text style={styles.indicator}>{index + 1}.</Text>
            <Text style={styles.label}>{item}</Text>
          </View>
        ))}
      </View>
    </CardWithTitle>
  );
};

const styles = StyleSheet.create({
  ingredientsList: {
    padding: 2,
    rowGap: 5,
    width: "100%",
  },
  stepContainer: {
    padding: 2,
    flexDirection: "row",
  },
  indicator: {
    fontSize: 16,
    lineHeight: 22,
    color: "#7b355f",
    textAlign: "left",
    width: 22,
  },
  label: {
    fontSize: 16,
    lineHeight: 22,
    color: "#666",
    flexWrap: "wrap",
    flexDirection: "row",
    flex: 1,
  },
});
