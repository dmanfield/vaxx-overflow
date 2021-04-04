import React from 'react'
import '../images/OrangeVirus.svg'
import PrimaryButton from '../components/Button/PrimaryButton'
import SecondaryButton from '../components/Button/SecondaryButton'

function ProviderRegisterPage () {
  
  return (
    <div>
      <header className="frame-1">
        <h1 id="vaxx">Vaxx</h1>
        <h1 id="overflow">OVERFLOW</h1>
        <h3 id="heading-paragraph">Register or sign in as a Provider.</h3>
      </header>
      <div>
        <img id= "orangevirus" src={require("../images/OrangeVirus.svg").default} alt="Orange Virus"/>  
      </div>
      <div id="main-primary-button">
        <PrimaryButton  id="primary-button" text="REGISTER"></PrimaryButton>
      </div>
      <div id="providers-secondary-button">
        <SecondaryButton text="SIGN IN" id="secondary-button" />
      </div>
    </div>
  )

};

export default ProviderRegisterPage;