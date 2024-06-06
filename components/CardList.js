import React, {Component} from 'react';
import { FlatList } from 'react-native';
import { getImageFromId } from '../utils/api';
import Card from './Card';

const keyExtractor = ({id}) => id.toString();

export default class CardList extends Component {
    renderItem = ({item: {id, author}}) => {
        const {commentsForItem, onPressComments} = this.props;
        const comments = commentsForItem[id];
        return (
            <Card
                fullname={author}
                image={{uri: getImageFromId(id)}}
                linkText={`${comments ? comments.length : 0} Comments`}
                onPressLinkText={() => onPressComments(id)}
            />
        )
    }
    render() {
        const {items, commentsForItem} = this.props;
        return (
            <FlatList
                data={items}
                renderItem={this.renderItem}
                keyExtractor={keyExtractor}
                extraData={commentsForItem}
            />
        )
    }
}