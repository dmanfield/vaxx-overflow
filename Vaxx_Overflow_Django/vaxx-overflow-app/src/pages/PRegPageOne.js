import React from 'react';
import PrimaryButton from '../components/Button/PrimaryButton';
import InputField from '../components/InputField/InputField';


const PRegPageOne =()=> {
  return (
    <div>
      <header className="frame-1">
        <h1 id="vaxx">Vaxx</h1>
        <h1 id="overflow">OVERFLOW</h1>
        <h3 id="heading-paragraph">Register as a Provider.</h3>
      </header>
      <form className="form-box">
        <InputField placeholder="" label="Name"/>
        <InputField placeholder="" label="Email"/>
        <InputField placeholder="" label="User Name"/>
        <InputField placeholder="" label="Password"/>
      </form>
      <div id="main-primary-button">
        <PrimaryButton  id="primary-button" text="REGISTER"/>
      </div>
    </div>
  );
};

export default PRegPageOne;