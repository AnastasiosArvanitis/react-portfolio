import React, {Fragment} from 'react';

import {Switch, Route} from 'react-router-dom';

import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Cv from './components/CV/Cv';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import './style/_main.scss'; 
import './app.scss';


const App = () =>  {
    
    return (
        
            <Fragment>
                <Header />
                
                <Route render={({location}) => (
                    <TransitionGroup>
                        <CSSTransition
                        key={location.key}
                        timeout={600}
                        classNames="fade"
                    >
                        <Switch location={location}>
                            <Route path='/' exact component={Home} />
                            <Route path='/About' component={About} />
                            <Route path='/Cv' component={Cv} />
                            <Route path='/Portfolio' component={Portfolio} />
                            <Route path='/Contact' component={Contact} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                )} />
              <Footer />  
        </Fragment>
        
        
    );
}
    

export default App;