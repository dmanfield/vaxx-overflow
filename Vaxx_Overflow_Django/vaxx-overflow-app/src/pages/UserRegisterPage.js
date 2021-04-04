import React from 'react'
import "../images/GreenVirus.svg"
import PrimaryButton from '../components/Button/PrimaryButton'
import SecondaryButton from '../components/Button/SecondaryButton'

function UserRegisterPage() {

  return (
    <div >
    <header className="frame-1">
      <h1 id="vaxx">Vaxx</h1>
      <h1 id="overflow">OVERFLOW</h1>
      <h3 id="heading-paragraph">Register or sign in as a vaccine seeker.</h3>
    </header>
    <div>
      <img id= "greenvirus" src={require("../images/GreenVirus.svg").default} alt="Green Virus"/>  
    </div>
    <div id="main-primary-button">
        <PrimaryButton  id="primary-button" text="REGISTER"></PrimaryButton>
      </div>
      <div id="providers-secondary-button">
        <SecondaryButton text="GET VACCINATED" id="secondary-button" />
      </div>
  </div>
  )
};

export default UserRegisterPage;