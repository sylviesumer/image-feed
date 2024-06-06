import React, {Component} from 'react';
import { ActivityIndicator, Image, StyleSheet, View } from "react-native";
import AuthorRow from './AuthorRow';

export default class Card extends Component {
    state = {
        loading: true,
    }
    handleLoad = () => {
        this.setState({loading: false});
    }
    render() {
        const {fullname, image, linkText, onPressLinkText} = this.props;
        const {loading} = this.state;
        return (
            <View>
                <AuthorRow fullname={fullname} linkText={linkText} onPressLinkText={onPressLinkText} />
                <View style={styles.image}>
                    {loading && <ActivityIndicator style={StyleSheet.absoluteFill} size="large" />}
                    <Image onLoad={this.handleLoad} style={StyleSheet.absoluteFill} source={image} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1,
        backgroundColor: 'rgba(0,0,0,0.02)'
    }
})