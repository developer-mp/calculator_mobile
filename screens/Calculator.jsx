import { Platform, View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import Button from "../components/Button";
import commify from "../utils/commify";

const Calculator = () => {
  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState("");
  const [operator, setOperator] = useState("");

  const handleButton = (text) => {
    const num = parseFloat(value);
    if (text === "AC") {
      setValue("0");
      setMemory("");
      setOperator("");
      return;
    }
    if (text === "+/-") {
      setValue((num * -1).toString());
      return;
    }
    if (text === "%") {
      setValue((num / 100).toString());
      setMemory("");
      setOperator("");
      return;
    }
    if (text === "÷") {
      if (operator !== "") {
        if (operator === "+") {
          setMemory(memory + num);
        }
        if (operator === "-") {
          setMemory(memory - num);
        }
        if (operator === "/") {
          setMemory(memory / num);
        }
        if (operator === "*") {
          setMemory(memory * num);
        }
      } else {
        setMemory(num);
      }
      setValue("0");
      setOperator("/");
      return;
    }
    if (text === "×") {
      if (operator !== "") {
        if (operator === "+") {
          setMemory(memory + num);
        }
        if (operator === "-") {
          setMemory(memory - num);
        }
        if (operator === "/") {
          setMemory(memory / num);
        }
        if (operator === "*") {
          setMemory(memory * num);
        }
      } else {
        setMemory(num);
      }
      setValue("0");
      setOperator("*");
      return;
    }
    if (text === "−") {
      if (operator !== "") {
        if (operator === "+") {
          setMemory(memory + num);
        }
        if (operator === "-") {
          setMemory(memory - num);
        }
        if (operator === "/") {
          setMemory(memory / num);
        }
        if (operator === "*") {
          setMemory(memory * num);
        }
      } else {
        setMemory(num);
      }
      setValue("0");
      setOperator("-");
      return;
    }
    if (text === "+") {
      if (operator !== "") {
        if (operator === "+") {
          setMemory(memory + num);
        }
        if (operator === "-") {
          setMemory(memory - num);
        }
        if (operator === "/") {
          setMemory(memory / num);
        }
        if (operator === "*") {
          setMemory(memory * num);
        }
      } else {
        setMemory(num);
      }
      setValue("0");
      setOperator("+");
      return;
    }
    if (text === ".") {
      if (value.includes(".")) return;
      setValue(value + ".");
      return;
    }
    if (text === "=") {
      if (!operator) return;
      if (operator === "+") {
        if ((memory + num).toString().length > 6) {
          setValue((memory + num).toExponential(1).toString());
        } else {
          setValue((memory + num).toString());
        }
      }
      if (operator === "-") {
        if ((memory - num).toString().length > 6) {
          setValue((memory - num).toExponential(1).toString());
        } else {
          setValue((memory - num).toString());
        }
      }
      if (operator === "/") {
        if ((memory / num).toString().length > 6) {
          setValue((memory / num).toExponential(1).toString());
        } else {
          setValue((memory / num).toString());
        }
      }
      if (operator === "*") {
        if ((memory * num).toString().length > 6) {
          setValue((memory * num).toExponential(1).toString());
        } else {
          setValue((memory * num).toString());
        }
      }
      setMemory("");
      setOperator("");
      return;
    }
    if (value[value.length - 1] === ".") {
      setValue(value + text);
    } else {
      setValue(
        parseFloat(value + text)
          .toString()
          .substring(0, 6)
      );
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.displayContainer}>
          <Text style={styles.displayText}>{commify(value)}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            onPress={handleButton}
            text="AC"
            color="black"
            backgroundColor="lightgray"
            styleText={{ fontSize: 30 }}
          />
          <Button
            onPress={handleButton}
            text="+/-"
            color="black"
            backgroundColor="lightgray"
            styleText={{ fontSize: 25, fontWeight: "500" }}
          />
          <Button
            onPress={handleButton}
            text="%"
            color="black"
            backgroundColor="lightgray"
            styleText={{ fontSize: 30, fontWeight: "500" }}
          />
          <Button
            onPress={handleButton}
            text="÷"
            color="white"
            backgroundColor="orange"
            styleText={{ fontSize: 40, fontWeight: "500" }}
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={handleButton}
            text="7"
            color="white"
            backgroundColor="#444444"
          />
          <Button
            onPress={handleButton}
            text="8"
            color="white"
            backgroundColor="#444444"
          />
          <Button
            onPress={handleButton}
            text="9"
            color="white"
            backgroundColor="#444444"
          />
          <Button
            onPress={handleButton}
            text="×"
            color="white"
            backgroundColor="orange"
            styleText={{ fontWeight: "500" }}
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={handleButton}
            text="4"
            color="white"
            backgroundColor="#444444"
          />
          <Button
            onPress={handleButton}
            text="5"
            color="white"
            backgroundColor="#444444"
          />
          <Button
            onPress={handleButton}
            text="6"
            color="white"
            backgroundColor="#444444"
          />
          <Button
            onPress={handleButton}
            text="−"
            color="white"
            backgroundColor="orange"
            styleText={{ fontWeight: "500" }}
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={handleButton}
            text="1"
            color="white"
            backgroundColor="#444444"
          />
          <Button
            onPress={handleButton}
            text="2"
            color="white"
            backgroundColor="#444444"
          />
          <Button
            onPress={handleButton}
            text="3"
            color="white"
            backgroundColor="#444444"
          />
          <Button
            onPress={handleButton}
            text="+"
            color="white"
            backgroundColor="orange"
            styleText={{ fontWeight: "500" }}
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={handleButton}
            text="0"
            color="white"
            backgroundColor="#444444"
            stylePosition={{ flex: 2, alignItems: "left" }}
            styleText={{ marginLeft: 30 }}
          />
          <Button
            onPress={handleButton}
            text="."
            color="white"
            backgroundColor="#444444"
          />
          <Button
            onPress={handleButton}
            text="="
            color="white"
            backgroundColor="orange"
            styleText={{ fontWeight: "500" }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: "45%",
    flex: 1,
    backgroundColor: "black",
  },
  displayContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  displayText: {
    fontSize: 90,
    color: "white",
    textAlign: "right",
    padding: 30,
  },
  buttonContainer: {
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Calculator;
