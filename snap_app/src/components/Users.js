import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AsyncStorage } from "react-native";
import { Card } from "react-native-elements";
import Snap from "./Snap";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: [],
    };
  }

  async listUsers() {
    const token = await AsyncStorage.getItem("token");
    fetch("http://snapi.epitech.eu/all", {
      method: "GET",
      headers: {
        token: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          emails: data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.listUsers();
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card title="List of your friends"></Card>
        <View style={styles.viewTitle}>
          {this.state.emails.map((email, key) => (
            <TouchableOpacity
              title="Connection"
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate("Snap", {
                  SelectedEmail: email.email,
                });
              }}
            >
              <Text style={styles.textCard} key={key}>
                {email.email}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  }
}

export default Users;

const styles = StyleSheet.create({
  viewTitle: { flex: 1, margin: 50 },
  textCard: { color: "white" },
  button: {
    alignItems: "center",
    backgroundColor: "#0072fe",
    padding: 20,
    borderRadius: 5,
    margin: 5,
  },
  Text: {
    color: "white",
  },
});
