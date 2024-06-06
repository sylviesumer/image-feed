import React, { Component } from "react";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { AsyncStorage, Modal, Platform, StyleSheet, Text, View } from "react-native";
import Feed from "./screens/Feed";
import Comments from "./screens/Comments";

const ASYNC_STORAGE_COMMENTS_KEY = 'ASYNC_STORAGE_COMMENTS_kEY';

export default class App extends Component {
  state = {
    commentsForItem: {},
    showModal: false,
    selectedItemId: null,
  };
  async componentDidMount() {
    try {
      const commentsForItem = await AsyncStorage.getItem(ASYNC_STORAGE_COMMENTS_KEY);
      this.setState({
        commentsForItem: commentsForItem ? JSON.parse(commentsForItem) : {}
      })
    } catch(e) {
      console.log('failed to load comments');
    }
  }
  openCommentScreen = (id) => {
    this.setState({showModal:true, selectedItemId: id});
  };
  closeCommentScreen = () => {
    this.setState({
      showModal: false,
      selectedItemId: null,
    });
  };
  onSubmitComment = async (text) => {
    const {selectedItemId, commentsForItem} = this.state;
    const comments = commentsForItem[selectedItemId] || [];
    const updated = {
      ...commentsForItem,
      [selectedItemId]: [...comments, text],
    }
    console.log(updated)
    this.setState({commentsForItem:updated});
    try {
      await AsyncStorage.setItem(ASYNC_STORAGE_COMMENTS_KEY, JSON.stringify(updated));
    } catch(e) {

    }
  }
  render() {
    const { commentsForItem, showModal, selectedItemId } = this.state;
    return (
      <View style={styles.container}>
        <Feed
          commentsForItem={commentsForItem}
          onPressComments={this.openCommentScreen}
          style={styles.feed}
        />
        <Modal visible={showModal} animationType="slide" onRequestClose={this.closeCommentScreen}>
          <Comments
            style={styles.comments}
            comments={commentsForItem[selectedItemId] || []}
            onClose={this.closeCommentScreen}
            onSubmitComment={this.onSubmitComment}
          />
        </Modal>
      </View>
    );
  }
}

const platformVersion =
  Platform.OS === "ios" ? parseInt(Platform.Version, 10) : Platform.Version;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  feed: {
    flex: 1,
    marginTop:
      Platform.OS === "android" || platformVersion < 11
        ? Constants.statusBarHeight
        : 0,
  },
  comments: {
    flex: 1,
    marginTop: Platform.OS === 'ios' && platformVersion < 11 ? Constants.statusBarHeight : 0,
  }
});
