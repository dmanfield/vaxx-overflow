import React from 'react';
import PrimaryButton from '../components/Button/PrimaryButton';
import InputField from '../components/InputField/InputField';

const PRegPageTwo = () => {
  return (
    <div>
      <header className="frame-1">
        <h1 id="vaxx">Vaxx</h1>
        <h1 id="overflow">OVERFLOW</h1>
        <h3 id="heading-paragraph">Please the enter information below.</h3>
      </header>
      <form className="form-box-provider-info">
        <InputField placeholder="" label="First Name"/>
        <InputField placeholder="" label="Last Name"/>
        <InputField placeholder="" label="Provider Name"/>
        <InputField placeholder="" label="Business Email"/>
        <InputField placeholder="" label="Street Address"/>
      </form>
      <div id="main-primary-button">
        <PrimaryButton  id="primary-button" text="REGISTER"/>
      </div>
    </div>
  )
};

export default PRegPageTwo;