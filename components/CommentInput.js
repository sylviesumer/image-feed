import React, { Component } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default class CommentInput extends React.Component {
  state = {
    text: "",
  };
  handleChangeText = (text) => {
    this.setState({ text });
  };
  handleEditingSubmiting = () => {
    const { onSubmit } = this.props;
    const { text } = this.state;
    if (!text) return;
    onSubmit(text);
    this.setState({ text: "" });
  };
  render() {
    const { placeholder } = this.props;
    const { text } = this.state;
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={text}
                placeholder={placeholder}
                underlineColorAndroid="transparent"
                onChangeText={this.handleChangeText}
                onSubmitEditing={this.handleEditingSubmiting}
            />
        </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        paddingHorizontal: 20,
        height: 60,
    },
    input: {
        flex: 1
    }
})