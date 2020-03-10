import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Show from './components/streams/Show';
import Create from './components/streams/Create';
import Edit from './components/streams/Edit';
import Delete from './components/streams/Delete';
import Home from './components/streams/streamHome';
import About from './components/streams/About';
import NavHeader from './components/NavBar';
const App = () => {
  
  
  return (
   <div>
   
     <BrowserRouter>
     <NavHeader/>
     <div>
     <Route path="/" exact component={Home}/>
     <Route path="/streams/create"  component={Create}/>
     <Route path="/streams/edit" component={Edit}/>
     <Route path="/streams/delete" exact component={Delete}/>
     <Route path="/streams/show" exact component={Show}/>
     <Route path="/streams/about" exact component={About}/>
     </div>
     </BrowserRouter>
   </div>
  );
}

export default App;
