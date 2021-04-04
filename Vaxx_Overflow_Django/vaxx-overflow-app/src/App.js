
import './App.css';
import PrimaryButton from './components/Button/PrimaryButton';
import InputField from './components/InputField/InputField';
import SecondaryButton from './components/Button/SecondaryButton';
import React from 'react';
import DropForm from './components/DropForm/DropForm';
import HomePage from './pages/HomePage';
import ProviderRegisterPage from './pages/provider/ProviderRegisterPage';
import UserRegisterPage from './pages/user/UserRegisterPage';
import URegPageOne from './pages/user/URegPageOne';
import PRegPageOne from './pages/provider/PRegPageOne';
import PRegPageTwo from './pages/provider/PRegPageTwo';
import PLogin from './pages/provider/PLogin';
import SendNotifications from './pages/provider/PSendNotifications';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NotificationsSent from './pages/provider/PSent';
function App() {
  
  return (
    <div id="outer-border">
      <div id="inner-border">
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/userregistration/" component={UserRegisterPage} />
        <Route exact path="/uregpageone/" component={URegPageOne} />
        <Route exact path="/providerregistration/" component={ProviderRegisterPage} />
        <Route exact path="/pregpageone/" component={ PRegPageOne } />
        <Route exact path="/pregpagetwo/" component={ PRegPageTwo } />
        <Route exact path="/login/" component={ PLogin }/>
        <Route exact path="/send/" component={ SendNotifications }/>
        <Route exact path="/sent/" component={ NotificationsSent } />
      </Router>
      </div>
    </div>                          
  );
}

export default App;