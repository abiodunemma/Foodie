import React from 'react';

import { BrowserRouter as Router,Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Home';
import Page1 from './page1';
import Sign from './Sign';
import Rest from './Rest';



function App() {
  return (
<Router>
    <div className='content'>  
        <Switch>
            <Route exact path="/">
            <Home />
            </Route>
            <Route path ='/page1'>
          <Page1/>
            </Route>
            <Route path ='/Sign'>
          <Sign/>
            </Route>
            <Route path ='/Rest'>
          <Rest/>
            </Route>
           
        </Switch>
    </div>
</Router>

  )
}

export default App