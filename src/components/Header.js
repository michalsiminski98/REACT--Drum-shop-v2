import React from 'react';
import {Switch, Route} from 'react-router-dom';

import '../styles/Header.css'

const Header = () => {
    return ( 
        <header className="header">
            <Switch>
                <Route path='/' exact render={()=>(
                    <div className="header__photo header--firstPhoto"></div>
                )} />
                <Route path='/contact' render={()=>(
                    <div className="header__photo header--secondPhoto"></div>
                )} />
                <Route path='/cart' exact render={()=>(
                    <div className="header__photo header--secondPhoto"></div>
                )} />
                <Route render={()=>(
                    <div className="header__photo header--firstPhoto"></div>
                )} />
            </Switch>
        </header>
     );
}
 
export default Header;