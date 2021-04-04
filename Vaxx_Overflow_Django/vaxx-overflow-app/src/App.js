import './App.css';
import Button from './components/Button/Button';
import React from 'react';
import DropForm from './components/DropForm/DropForm';
import HomePage from './pages/HomePage'
import ProviderRegisterPage from './pages/ProviderRegisterPage'


function App() {

  return (
    <div>
      <div>
        <HomePage />
      </div>
      {/* <div>
        <Button />
        <DropForm />
      </div> */}
    </div>  
  );
}

export default App;
