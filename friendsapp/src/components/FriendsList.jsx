import { Component } from 'react';
import friends from '../data';
import FriendRow from './FriendRow';

export default class FriendsList extends Component {
    state = {
        friends: friends
    }   

    // override to return JSX
    render() {
        return this.state.friends.map(friend => <FriendRow person={friend}/>)
    }
}