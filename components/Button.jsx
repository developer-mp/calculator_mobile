import { Text, StyleSheet, TouchableOpacity } from "react-native";

const Button = ({
  text,
  color,
  backgroundColor,
  stylePosition,
  styleText,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: backgroundColor },
        { ...stylePosition },
      ]}
      onPress={() => onPress(text)}
    >
      <Text style={[styles.text, { color: color }, { ...styleText }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  text: {
    fontSize: 40,
    fontWeight: "400",
  },
});

export default Button;
