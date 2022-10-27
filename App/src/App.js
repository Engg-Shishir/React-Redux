import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import Cakecontainer from './components/Cakecontainer';
import store from './redux/Store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cakecontainer />
      </div>
    </Provider>
  );
}

export default App;
