import { Component } from "react";

export default class FriendRow extends Component {
    render() {
        return <div className="row">
               {this.props.person.firstName} &nbsp; {this.props.person.lastName} &nbsp;
               <button type="button">Delete</button>
        </div>
    }
}