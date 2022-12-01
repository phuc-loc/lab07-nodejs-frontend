import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import { ConfigureStore } from './redux/configureStore';
import { Provider } from 'react-redux';
import React from 'react';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
