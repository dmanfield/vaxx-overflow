import React, {useState} from 'react';
import PrimaryButton from '../../components/Button/PrimaryButton';
import InputField from '../../components/InputField/InputField';


const SendNotifications =(props)=> {
  
  const onSubmitHandler = (e) => {
    e.preventDefault()
  }
  return (
    <div className="centered-div">
      <header className="frame-1">
        <h1 id="vaxx">Vaxx</h1>
        <h1 id="overflow">OVERFLOW</h1>
        <h3 id="heading-paragraph">Register as a Provider.</h3>
      </header>
      <form className="initial-form">
        <InputField placeholder="" label="Email"/>
        <InputField placeholder="" label="Password"/>
      </form>
      <div id="main-primary-button">
        <PrimaryButton  id="primary-button" text="login" clickAction={ ()=>{props.history.push("/send/")} }/>
      </div>
    </div>
  );
};

export default SendNotifications;