import React from "react";
import { View, Text, TextInput, Pressable, StyleSheet,Image } from "react-native";

export default function ForgetPassword() {
  return (
    <View style={styles.container}>
    
<Image source={{uri: 'https://img.pikbest.com/origin/09/16/65/85zpIkbEsT6jP.jpg!w700wp'}}
       style={{width: 200, height: 200}} />
       
      <Text style={styles.title}>FORGET</Text>
      <Text style={styles.title}>PASSWORD</Text>

      <Text style={styles.subtitle}>
        Provide your account’s email for which you want to reset your password
      </Text>

      <View style={styles.inputBox}>
        <Text style={styles.inputIcon}>✉</Text>
        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
        />
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>NEXT</Text>
      </Pressable>
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
  lockIcon: {
    width: 80,
    height: 80,
    backgroundColor: "black", 
    borderRadius: 10,
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
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ddd",
    paddingHorizontal: 10,
    borderRadius: 4,
    width: "100%",
    marginBottom: 20,
  },
  inputIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
  },
  button: {
    backgroundColor: "#FFD600",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 4,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
