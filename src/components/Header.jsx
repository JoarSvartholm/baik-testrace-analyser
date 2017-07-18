import React from 'react';
import {Link} from 'react-router-dom';


export const Header =(props) =>{
    return(
      <div className="header">
        <nav>
          <ul className="nav navbar-nav">
            <li><Link to="/" className={"sbtn"}>Testloppsanalyseraren</Link></li>
            <li><Link to="./newEntry">Lägg till nytt test</Link></li>
            <li><Link to="./Analys">Analysera test</Link></li>
          </ul>
        </nav>
      </div>
    )
}
