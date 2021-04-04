import React from 'react'

// static
import '../../images/OrangeVirus.svg'

// components
import PrimaryButton from '../../components/Button/PrimaryButton';
import SecondaryButton from '../../components/Button/SecondaryButton'


const UserRegisterPage = (props) => {
  
  return (
    <div className="centered-div">
    <header className="frame-1">
      <h1 id="vaxx">Vaxx</h1>
      <h1 id="overflow">OVERFLOW</h1>
      <h3 id="heading-paragraph">Register or sign in as a vaccine seeker.</h3>
    </header>
    <div>
      <img className="illustration" src={require("../../images/GreenVirus.svg").default} alt="Green Virus"/>  
    </div>
    <div id="main-primary-button">
        <PrimaryButton  id="primary-button" text="REGISTER" clickAction={ ()=>{props.history.push("/uregpageone/")} }></PrimaryButton>
      </div>
      <div id="providers-secondary-button">
        <SecondaryButton text="LOGIN" id="secondary-button" clickAction={ ()=>{console.log(":")} }/>
      </div>
  </div>
  )
};

export default UserRegisterPage;