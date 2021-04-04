import React from 'react';
import SecondaryButton from '../../components/Button/SecondaryButton';


const NotificationsSent =(props)=> {
  return (
    <div className="centered-div">
        
      <header className="frame-1">
        <h1 id="vaxx">Vaxx</h1>
        <h1 id="overflow">OVERFLOW</h1>
        <div id="notification-span">
        <h4>Notifications have been sent to <mark className="mark">10</mark> eligible patients.</h4>
        </div>
      </header>
      <div id="notification-body">
          <div><h2><span>8</span><span><mark id="body-mark-one">of</mark></span><span><mark id="body-mark-two">10</mark></span></h2></div>
      </div>
      <div id="notification-body-two">
      <h4>Appointments have been confirmed</h4>
      </div>
      <div className="send-home" id="main-secondary-button">
        <SecondaryButton  id="secondary-button" text="return" clickAction={ ()=>{props.history.push("/send/")} }/>
      </div>
    </div>
  );
};

export default NotificationsSent;