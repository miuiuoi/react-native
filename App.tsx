import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [student, setStudent] = useState([
    { id: 1, name: "Toan", age: 22 },
    { id: 2, name: "Toan1", age: 18 },
    { id: 3, name: "Toan2", age: 20 },
    { id: 4, name: "Toan3", age: 21 },
    { id: 5, name: "Toan4", age: 24 },
    { id: 6, name: "Toan5", age: 19 },
    { id: 7, name: "Toan6", age: 18 },
    { id: 8, name: "Toan7", age: 20 },
    { id: 9, name: "Toan8", age: 22 },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
      <ScrollView>
        {student.map(item => {
          return (
            <View key={item.id} style={styles.item}>
              <Text>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

// CSS in JS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 30,
    fontWeight: "600",
  },
  item: {
    backgroundColor: "pink",
    padding: 30,
    marginBottom: 30,
  },
});