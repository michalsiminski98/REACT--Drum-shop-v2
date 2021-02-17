import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';

class App extends React.Component {

    render(){
  return (
        <Router>
            <Header/>
            <Navigation/>
            <Page/>
            <Footer/>
        </Router>
  );
}
}

export default App;
