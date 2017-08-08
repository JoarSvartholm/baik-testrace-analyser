import React, {Component} from 'react';
import * as firebase from 'firebase';

export class SelectUser extends Component {
  constructor(){
    super();
    this.state = {
      user:null,
      loading: true,
      userList: "",
    }
  }

  componentWillMount(){
    const UsrRef = firebase.database().ref().child('Users');
    // start listening for firebase updates
    this.listenForUsers(UsrRef);
  }

//listener to get data from firebase and update listview accordingly
  listenForUsers(UsrRef) {
    UsrRef.on('value', snap =>{
      this.setState({
        userList:snap.val()
      })
    })
  }
  render(){
  const usr = []
  Object.keys(this.state.userList).map(function(i) {return usr.push(<option key={i} value={i}>{i}</option>)})
    return(
      <div className="EntryHolder"> Namn:
        <select value={this.props.option} onChange={this.props.onChange.bind(this)}>
          {usr}
        </select>
      </div>
    )
  }
}
