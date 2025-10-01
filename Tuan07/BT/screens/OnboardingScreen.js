import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.subtitle}>
          A premium online store for sporter and their stylish choice
        </Text>
      </View>

      <View style={styles.middleContainer}>
        <Image
          source={require("../assets/bike1.PNG")}
          style={styles.bikeImage}
        />
        <Text style={styles.title}>POWER BIKE SHOP</Text>
      </View>

      {/* Phần dưới: Nút */}
      <View style={styles.bottomContainer}>
        <CustomButton
          title="Get Started"
          onPress={() => navigation.navigate("BikeList")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  middleContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 40,
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    fontWeight:"bold"
  },
  bikeImage: {
    width: 280,
    height: 230,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
});
