import React from 'react';
import PrimaryButton from '../../components/Button/PrimaryButton';
import InputField from '../../components/InputField/InputField';
import DropForm from '../../components/DropForm/DropForm';


const URegPageTwo =(props)=> {

  return (
    <div className="centered-div">
      <header className="frame-1">
        <h1 id="vaxx">Vaxx</h1>
        <h1 id="overflow">OVERFLOW</h1>
        <h3 id="heading-paragraph">We first need to gather your personal and health demographic information.</h3>
      </header>
      <div className="input-form">
      <form className=" tip">
        <DropForm placeholder="" label="Gender" options={['Male', 'Female', 'Other/Prefer not to say']}/>
        <InputField placeholder="" label="Phone"/>
        <InputField placeholder="" label="Zipcode"/>
        <InputField placeholder="" label="Date of Birth" />
      </form>
      </div>
      <div id="main-primary-button">
        <PrimaryButton  id="primary-button" text="SUBMIT" clickAction={ ()=>{props.history.push("/uregscreening/")} }/>
      </div>
    </div>
  );
};

export default URegPageTwo; 