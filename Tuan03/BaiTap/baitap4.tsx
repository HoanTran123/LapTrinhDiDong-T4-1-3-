import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

export default function VerificationCode() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  const handleChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CODE</Text>
      <Text style={styles.subtitle}>VERIFICATION</Text>

      <Text style={styles.info}>
        Enter ontime password sent on {"\n"}
        <Text style={{ fontWeight: "bold" }}>+849092605798</Text>
      </Text>

      <View style={styles.codeRow}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            maxLength={1}
            keyboardType="numeric"
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
          />
        ))}
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>VERIFY CODE</Text>
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
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 20,
    textAlign: "center",
  },
  info: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 30,
  },
  codeRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  codeInput: {
    borderWidth: 1,
    borderColor: "black",
    width: 45,
    height: 45,
    marginHorizontal: 5,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#e0f7fa",
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
