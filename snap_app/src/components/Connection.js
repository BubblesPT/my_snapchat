import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Input, Icon } from "react-native-elements";
import axios from "axios";
import { AsyncStorage } from "react-native";

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  setEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  setPassword = (e) => {
    this.setState({ password: e.target.value });
  };

  login() {
    axios
      .post("http://snapi.epitech.eu/connection", this.state)
      .then((confirm) => {
        AsyncStorage.setItem("token", confirm.data.data.token);
        const token = AsyncStorage.getItem("token");
        this.props.navigation.navigate(token ? "Snap" : "Connection");
      })
      .catch((error) => {
        this.setState({ result: "Connection failed" });
      });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Input
          keyboardType="default"
          textContentType="emailAddress"
          placeholder="Email"
          leftIcon={<Icon name="email" size={15} color="#1976d2" />}
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
        />

        <Input
          keyboardType="default"
          textContentType="password"
          secureTextEntry
          placeholder="Password"
          leftIcon={<Icon name="subway" size={15} color="#1976d2" />}
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
        />
        <TouchableOpacity
          title="Connection"
          style={styles.button}
          onPress={() => {
            this.login();
          }}
        >
          <Text style={styles.Text}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
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

export default UserLogin;
