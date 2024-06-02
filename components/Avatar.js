import React, {Component} from 'react';
import { StyleSheet, Text, View } from "react-native";

export default class Avatar extends Component {
    render() {
        const {size, backgroundColor, initials} = this.props;
        const style = {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor,
        };
        return (
            <View style={[styles.conatiner, style]}>
                <Text style={styles.text}>{initials}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    conatiner: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#fff',
    }
});