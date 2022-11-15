import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import {ConfigureStore} from './redux/configureStore';
import {Provider} from 'react-redux';
import React from 'react';

const store = ConfigureStore(); 

function App() {
  return (
    <Provider store={store} >
    <div className="container">
      <BrowserRouter>
        <div className="row"> 
          <Main />
        </div>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
