import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
const [name, setName] = useState<string>("e cu, "); 
const [count, setCount] = useState<number>(0);
const [test, setTest] = useState<boolean>(false);
const [test1, setTest1] = useState(
  {
    name: "e cu",
    age: 25,
  }
)
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>
        {count}
      </Text>

      <View>
        <Button
          title="Increase"
          onPress={() => {
            setCount(count + 1)
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
  hello:{
    fontSize: 50,
    fontWeight: "600"
  }
});
