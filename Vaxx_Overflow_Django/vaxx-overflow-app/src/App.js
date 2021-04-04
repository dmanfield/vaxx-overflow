
import './App.css';
import PrimaryButton from './components/Button/PrimaryButton';
import InputField from './components/InputField/InputField';
import SecondaryButton from './components/Button/SecondaryButton';
import React from 'react';
import DropForm from './components/DropForm/DropForm';
import HomePage from './pages/HomePage';
import ProviderRegisterPage from './pages/provider/ProviderRegisterPage';
import UserRegisterPage from './pages/user/UserRegisterPage';
import PRegPageOne from './pages/provider/PRegPageOne';
import PLogin from './pages/provider/PLogin';
import SendNotifications from './pages/provider/PSendNotifications';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {

  
  return (
    <div id="outer-border">
      <div id="inner-border">
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/userregistration/" component={UserRegisterPage} />
        <Route exact path="/providerregistration/" component={ProviderRegisterPage} />
        <Route exact path="/pregpageone/" component={ PRegPageOne } />
        <Route exact path="/login/" component={ PLogin }/>
        <Route exact path="/send/" component={ SendNotifications }/>
      </Router>
      </div>
    </div>                          
  );
}

export default App;