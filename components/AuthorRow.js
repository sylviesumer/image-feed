import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native-web";
import Avatar from './Avatar';
import getAvatarColor from '../utils/getAvatarColor';
import getInitials from '../utils/getInitials';

export default class AuthorRow extends Component {
    renderButton() {
        const {linkText, onPressLinkText} = this.props;
        return (
            <TouchableOpacity onPress={onPressLinkText}>
                <Text numberOfLines={1}>{linkText}</Text>
            </TouchableOpacity>
        );
    }
    render() {
        const {fullname, linkText} = this.props;
        return (
            <View style={styles.container}>
                <Avatar
                    size={35}
                    initials={getInitials(fullname)}
                    backgroundColor={getAvatarColor(fullname)}
                />
                <Text style={styles.text} numberOfLines={1}>{fullname}</Text>
                {!!linkText && this.renderButton()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    text: {
        flex: 1,
        marginHorizontal: 6,
    }
})