import React from 'react';
import './App.css';
import { Route} from 'react-router-dom'
import List from './websites/List';
import Add from './websites/Add';
import View from './websites/view';
import NavigationBar from './components/Navigation';
import Update from './websites/Update';


function App() {
  return (
    <div style={{paddingTop:50}}>
      <NavigationBar/>
      <div className="container">
        <div>
          <div> 
            <Route exact path = "/" component={List}></Route>
            <Route exact path = "/employees" component={List}></Route>
            <Route path = "/add" component={Add}></Route>
            <Route path = "/view/:id" component={View}></Route>
            <Route path = "/update/:id" component={Update}></Route>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;