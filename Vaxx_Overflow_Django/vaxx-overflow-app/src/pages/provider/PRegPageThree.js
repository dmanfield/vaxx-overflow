import React from 'react';
import PrimaryButton from '../../components/Button/PrimaryButton';
import InputField from '../../components/InputField/InputField';


const PRegPageTwo =(props)=> {
  console.log(props)
  
  const getStuff = () => {
    const stuff = localStorage.getItem("email")
    console.log(stuff)
  }
  return (
    <div className="centered-div">
      <header className="frame-1">
        <h1 id="vaxx">Vaxx</h1>
        <h1 id="overflow">OVERFLOW</h1>
        <h3 id="heading-paragraph">Health Organization Details</h3>
      </header>
      <form className="initial-form">
        <InputField placeholder="" label="Organiztion Address"/>
        <InputField placeholder="" label="Organization Zip Code"/>
        <InputField placeholder="" label="Organization City"/>
        <InputField placeholder="" label="Organization State"/>
        <InputField placeholder="" label="Organization Phone Number"/>
      </form>
      <div id="main-primary-button">
        <PrimaryButton  id="primary-button" text="SUBMIT" clickAction={ getStuff }/>
      </div>
    </div>
  );
};

export default PRegPageTwo;