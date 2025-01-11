import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [test, setTest] = useState<boolean>(false);
  const [test1, setTest1] = useState({
    name: "e cu",
    age: 25,
  });

  const [inputString, setInputString] = useState<string>("");
  const [inputNumber, setInputNumber] = useState<number>(0);
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 30, fontWeight: "600" }}>Name: {inputString}</Text>
        <TextInput
          multiline
          style={styles.textinput}
          onChangeText={(value) => setInputString(value)}
        />
      </View>

      <View>
        <Text style={{ fontSize: 30, fontWeight: "600" }}>Age: {inputNumber}</Text>
        <TextInput
          multiline
          style={styles.textinput}
          onChangeText={(value) => setInputNumber(+value)}
          keyboardType="numeric"
        />
      </View>
      <Text style={styles.hello}>{count} times</Text>

      <View>
        <Button
          title="Increase"
          onPress={() => {
            setCount(count + 1);
          }}
        />
      </View>
    </View>
  );
}

//css in js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  hello: {
    fontSize: 50,
    fontWeight: "600",
  },
  textinput: {
    borderColor: "green",
    borderWidth: 1,
    width: 200,
    padding: 15,
  },
});
