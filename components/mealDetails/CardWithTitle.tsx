import { Text, StyleSheet, View } from "react-native";

interface IProps {
  children: any;
  title: string;
}

export default (props: IProps) => {
  return (
    <View style={styles.ingredientsContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  ingredientsContainer: {
    padding: 10,
    paddingTop: 0,
    width: "100%",
    backgroundColor: "white",
    textAlign: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    marginTop: 10,
  },
  header: {
    paddingTop: 10,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderColor: '#bbb',
    width: '100%',
    marginBottom: 10
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#8b3768",
    textAlign: 'center'
  },
});
