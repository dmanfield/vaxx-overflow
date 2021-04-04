import React from 'react';
import PrimaryButton from '../../components/Button/PrimaryButton';
import InputField from '../../components/InputField/InputField';


const PRegPageOne =()=> {
  return (
    <div className="centered-div">
      <header className="frame-1">
        <h1 id="vaxx">Vaxx</h1>
        <h1 id="overflow">OVERFLOW</h1>
        <h3 id="heading-paragraph">Register as a Provider.</h3>
      </header>
      <form className="initial-form">
        <InputField placeholder="" label="First Name"/>
        <InputField placeholder="" label="Last Name"/>
        <InputField placeholder="" label="Email Name"/>
        <InputField placeholder="" label="Password Name"/>
      </form>
      <div id="main-primary-button">
        <PrimaryButton  id="primary-button" text="REGISTER"/>
      </div>
    </div>
  );
};

export default PRegPageOne;