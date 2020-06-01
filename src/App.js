import React from 'react';
import ExerciseForm from './components/ExerciseForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import EditForm from './components/EditForm';


function App() {
  return (
      // Set up of my Route url
      <Router>
         <div>
            <Header />
            <Switch>
               <Route path='/' exact component={ExerciseForm}/> 
               <Route path='/update/:id' exact component={EditForm}/>
            </Switch>
         </div>
      </Router>
  )  
  
  
}

export default App;
