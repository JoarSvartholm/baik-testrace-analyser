import React from 'react';
import * as firebase from 'firebase';


//components
import {Entry} from './NewEntry/Entry';
import {SelectTrack} from './SelectTrack';
import {DatePick} from './NewEntry/Date';


export class NewEntry extends React.Component{
  constructor(){
    super();
/*    const mattsundRef = firebase.database().ref().child('mattsund');
    console.log(mattsundRef)*/

  }
  render(){
    return(
      <div>

        <h1>Lägg till nytt test</h1>
        <div>
          <SelectTrack />
          <DatePick  />

          <Entry checkpoint="1" />
          <Entry checkpoint="2" />
          <Entry checkpoint="3" />
          <Entry checkpoint="tot" />


        </div>
      </div>
    )
  }
}
