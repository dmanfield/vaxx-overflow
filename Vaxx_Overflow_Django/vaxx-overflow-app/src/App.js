import './App.css';
import PrimaryButton from './components/Button/PrimaryButton';
import InputField from './components/InputField/InputField';
import SecondaryButton from './components/Button/SecondaryButton';
import React from 'react';
import DropForm from './components/DropForm/DropForm';
import HomePage from './pages/HomePage';
import ProviderRegisterPage from './pages/ProviderRegisterPage';
import UserRegisterPage from './pages/UserRegisterPage';
import PRegPageOne from './pages/PRegPageOne';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PRegPageTwo from './pages/ProviderInfo';


function App() {

  
  return (
    <div>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/UserRegistration/" component={UserRegisterPage} />
        <Route exact path="/ProviderRegistration/" component={ProviderRegisterPage} />
        <Route exact path="/PRegPageOne/" component={ PRegPageOne } />
        <Route exact path="/PRegPageTwo/" component={ PRegPageTwo } />
      </Router>
      
      {/* <InputField label={"Label"} placeholder={"placeholder text"}></InputField>
      <PrimaryButton text='sign in' />
      <SecondaryButton text="Secondary" /> */}
    </div>                          
  );
}

export default App;
