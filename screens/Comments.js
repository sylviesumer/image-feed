import React, {Component} from 'react';
import { SafeAreaView } from 'react-native';
import CommentInput from '../components/CommentInput';
import CommentList from '../components/CommentList';
import NavigationBar from '../components/NavigationBar';

export default class Comments extends Component {
    render() {
        const {style, comments, onClose, onSubmitComment} = this.props;
        return (
            <SafeAreaView style={style}>
                <NavigationBar title="Comments" leftText="Close" onPressLeftText={onClose} />
                <CommentInput onSubmit={onSubmitComment} placeholder="Leave a comment" />
                <CommentList items={comments} />
            </SafeAreaView>
        );
    }
}