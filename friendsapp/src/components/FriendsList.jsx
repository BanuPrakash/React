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
    }
    deleteFriend(id) {
        let frnds = this.state.friends.filter(f => f.id !== id);
        this.setState({
            friends: frnds
        })
    }

    // override to return JSX
    render() {
        return <div>
            <Filter />
            {
                this.state.friends.map(friend => <FriendRow
                    person={friend}
                    delEvent={this.deleteFriend} />)
            }
        </div>

    }
}