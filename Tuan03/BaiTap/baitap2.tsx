import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <Text style={styles.title}>GROW</Text>
      <Text style={styles.title}>YOUR BUSINESS</Text>
      <Text style={styles.subtitle}>
        We will help you to grow your business using online server
      </Text>
      <View style={styles.buttonRow}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </Pressable>
      </View>
      <Text style={styles.footer}>HOW WE WORK?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0f7fa", 
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 8,
    borderColor: "black",
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 15,
    marginBottom: 30,
  },
  buttonRow: {
    flexDirection: "row",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#FFD600",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 4,
    marginHorizontal: 10,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  footer: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
