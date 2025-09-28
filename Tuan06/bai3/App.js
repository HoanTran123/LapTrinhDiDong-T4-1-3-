// App.js
import React from "react";
import { View, Text, FlatList, TextInput, Image, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const data = [
  {
    id: "1",
    name: "iPhone X",
    price: "20,000,000 đ",
    image: require("./assets/vs_black.png"),
  },
  {
    id: "2",
    name: "Samsung S20",
    price: "18,000,000 đ",
    image: require("./assets/vs_blue.png"),
  },
];

function HomeScreen() {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={item.image} style={styles.img} />
          <Text>{item.name}</Text>
          <Text style={{ color: "red" }}>{item.price}</Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={{ color: "white" }}>Chọn mua</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
}

function SearchScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text>Tìm kiếm</Text>
      <TextInput placeholder="Nhập từ khóa..." style={{ borderWidth: 1, marginTop: 10, padding: 5 }} />
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ alignItems: "center", marginTop: 50 }}>
      <Image source={require("./assets/download.jpg")} style={{ width: 100, height: 100, borderRadius: 50 }} />
      <Text style={{ fontSize: 18, marginTop: 10 }}>Nguyen Van A</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
    margin: 10,
    alignItems: "center",
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  btn: {
    marginTop: 5,
    backgroundColor: "red",
    padding: 6,
    borderRadius: 5,
  },
});
