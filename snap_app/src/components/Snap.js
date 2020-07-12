import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

class Snap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SelectedImage: "https://i.imgur.com/3SFpq3S.png",
      SelectedEmail: "",
    };
  }

  async openImagePickerAsync() {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }
    this.setState({
      SelectedImage: pickerResult.uri,
    });
  }

  async SelectUser() {
    if (this.state.SelectedImage !== null) {
      this.props.navigation.navigate(
        this.state.SelectedImage ? "Users" : "Snap",
        {
          testing: "testOK",
        }
      );
    } else {
      Alert.alert(
        "Error",
        "Select image before choosing an user to send an image to"
      );
    }
  }

  getEmail() {
    if (typeof this.props.route.params != "undefined") {
      return this.props.route.params.SelectedEmail;
    } else {
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: this.state.SelectedImage,
          }}
          style={styles.logo}
        />

        <Text style={styles.instructions}>{this.getEmail()}</Text>
        <Text style={styles.instructions}>
          Share a moment with your friends by selecting a picture!
        </Text>
        <TouchableOpacity
          onPress={async () => {
            await this.openImagePickerAsync();
          }}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>Select Image</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            this.SelectUser();
          }}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>Select User</Text>
        </TouchableOpacity>

        <TextInput
          placeholder="Enter the duration"
          underlineColorAndroid="transparent"
          style={styles.TextInputStyle}
          keyboardType={"numeric"}
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Send Snap</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Snap;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 158,
    height: 190,
    marginBottom: 20,
  },
  instructions: {
    color: "#888",
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  TextInputStyle: {
    textAlign: "center",
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#00BFFF",
    marginBottom: 10,
  },
});
