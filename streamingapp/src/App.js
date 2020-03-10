import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Show from './components/streams/Show';
function App() {
  return (
    <div className="App">
      <h3> streaming app</h3>

      <Show/>
    </div>
  );
}

export default App;
