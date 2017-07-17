import React from 'react';
import {Link,NavLink} from 'react-router-dom';

export const Header =(props) =>{
    return(
      <div className="header">
        <nav>
          <ul className="nav navbar-nav">
            <li><NavLink to="./home" activeClassName={"is-active"}>Home</NavLink></li>
            <li><Link to="./user">User</Link></li>
          </ul>
        </nav>
      </div>
    )
}
