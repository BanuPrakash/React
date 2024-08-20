import { Component } from 'react';
import friends from '../data';
import FriendRow from './FriendRow';
import Filter from './Filter';

export default class FriendsList extends Component {
    state = {
        friends: friends
    }
    constructor(props) {
        super(props);
        this.deleteFriend = this.deleteFriend.bind(this);
        this.filterFriends = this.filterFriends.bind(this);
        this.state.complete = this.state.friends; // one more pristine copy
    }

    filterFriends(txt) {
        let frnds = this.state.complete.filter(f => f.lastName.toUpperCase().indexOf(txt.toUpperCase()) >= 0)

        this.setState({
            friends: frnds
        })
    }
    deleteFriend(id) {
        let frnds = this.state.complete.filter(f => f.id !== id);
        this.setState({
            friends: frnds
        })
    }

    // override to return JSX
    render() {
        return <div>
            <Filter filterEvt={this.filterFriends} />
            {
                this.state.friends.map(friend => <FriendRow
                    key={friend.id}
                    person={friend}
                    delEvent={this.deleteFriend} />)
            }
        </div>

    }
}