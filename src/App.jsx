// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ShoppingList from './ShoppingList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ShoppingList />
      </div>
    </Provider>
  );
}

export default App;
