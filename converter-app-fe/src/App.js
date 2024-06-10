import React from 'react';
import ConvertToExcel from './components/ConvertToExcel';
import { Provider } from 'react-redux';
import store from './redux/store'; 

const App = () => {
  return (
    <Provider store={store}>
    <div>
      <h1>Excel Converter App</h1>
      <ConvertToExcel />
    </div>
    </Provider>
  );
};

export default App;
