import { Component } from "react";

export default class FriendRow extends Component {

    render() {
        let {id, firstName, lastName} = this.props.person;
        return <div className="row">
               {firstName} &nbsp; {lastName} &nbsp;
               <button type="button">Delete</button>
        </div>
    }
}