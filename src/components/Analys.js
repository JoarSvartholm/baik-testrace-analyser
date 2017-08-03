import React from 'react';
import * as firebase from 'firebase';




export class Analys extends React.Component{
  constructor(){
    super();
    this.state = {
      track: 'ormberget'
    }
    this.trackRef = firebase.database().ref().child('ormberget');
  }


  componentWillMount(){
    const db = firebase.database();
    const testRef = db.ref('tests');
    testRef.once('value',snap =>{


      this.setState({
        track: snap.val()
      })
/*      const values = this.state.track.mattsund.distances.map((number) =>
        console.log({number}))*/

    })
  }

  render(){

    return(
      <div>
        <h1>Analysera</h1>
        <p>


        </p>


      </div>
    )
  }
}
