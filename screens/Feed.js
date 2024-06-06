import React, { Component } from "react";
import { ActivityIndicator, Text, SafeAreaView } from "react-native";
import { fetchImages } from "../utils/api";
import CardList from "../components/CardList";

export default class Feed extends Component {
  state = {
    loading: true,
    error: false,
    items: [],
  };
  async componentDidMount() {
    try {
      const items = await fetchImages();
      this.setState({
        loading: false,
        items,
      });
    } catch (e) {
      this.setState({
        loading: false,
        error: true,
      });
    }
  }
  render() {
    const { commentsForItem, onPressComments, style } = this.props;
    const { loading, error, items } = this.state;
    if (loading) {
        return <ActivityIndicator size="large" />
    }
    if (error) {
        return <Text>Error...</Text>;
    }
    return (
        <SafeAreaView style={style}>
            <CardList items={items} commentsForItem={commentsForItem} onPressComments={onPressComments} />
        </SafeAreaView>
    )
  }
}
