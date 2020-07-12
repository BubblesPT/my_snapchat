import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Inscription from "./src/components/Inscription.js";
import Connection from "./src/components/Connection.js";
import Users from "./src/components/Users.js";
import Profile from "./src/components/Profile.js";
import Snap from "./src/components/Snap.js";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity
        title="Inscription"
        style={styles.button}
        onPress={() => navigation.navigate("Inscription")}
      >
        <Text style={styles.Text}>Inscription</Text>
      </TouchableOpacity>

      <TouchableOpacity
        title="Connection"
        style={styles.button}
        onPress={() => navigation.navigate("Connection")}
      >
        <Text style={styles.Text}>Connection</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Inscription" component={Inscription} />
        <Stack.Screen name="Connection" component={Connection} />
        <Stack.Screen name="Users" component={Users} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Snap" component={Snap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#0072fe",
    padding: 20,
    borderRadius: 5,
    width: 150,
    margin: 5,
  },
  Text: {
    color: "white",
  },
});

export default App;
