import React, { useState } from "react";
import {  View,  Text,TextInput,Pressable, StyleSheet,Image,} from "react-native";

export default function LoginScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <View style={styles.inputBox}>
        <TextInput placeholder="Email" style={styles.input} />
      </View>

      <View style={styles.inputBox}>
        <TextInput
          placeholder="Password"
          style={styles.input}
        />
        <Pressable >
          <Text style={styles.eyeIcon}>👁</Text>
        </Pressable>
      </View>

      <Pressable style={styles.loginButton}>
        <Text style={styles.loginText}>LOGIN</Text>
      </Pressable>

      <Text style={styles.terms}>
        When you agree to terms and conditions
      </Text>

      <Pressable>
        <Text style={styles.forgot}>For got your password?</Text>
      </Pressable>

      <Text style={styles.orLogin}>Or login with</Text>

      <View style={styles.socialRow}>
        <Pressable style={styles.socialButton}>
          <Image
            source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/480px-Facebook_logo_36x36.svg.png'}}
            style={styles.socialIcon}
            resizeMode="contain"
          />
        </Pressable>

        <Pressable style={styles.socialButton}>
          <Image
            source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/480px-Facebook_logo_36x36.svg.png'}}
            style={styles.socialIcon}
            resizeMode="contain"
          />
        </Pressable>

        <Pressable style={styles.socialButton}>
          <Image
            source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/480px-Facebook_logo_36x36.svg.png'}}
            style={styles.socialIcon}
            resizeMode="contain"
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8fbe8",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d6ead6",
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: "100%",
  },
  input: {
    flex: 1,
    height: 40,
  },
  eyeIcon: {
    fontSize: 20,
    marginLeft: 10,
  },
  loginButton: {
    backgroundColor: "#d84315",
    paddingVertical: 12,
    borderRadius: 4,
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  terms: {
    fontSize: 12,
    marginBottom: 10,
  },
  forgot: {
    fontSize: 14,
    color: "blue",
    marginBottom: 20,
  },
  orLogin: {
    fontSize: 14,
    marginBottom: 15,
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  socialButton: {
    flex: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "white",
    borderRadius: 4,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
});
