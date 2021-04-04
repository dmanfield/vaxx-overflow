import React from 'react'
import '../../images/OrangeVirus.svg'
import PrimaryButton from '../../components/Button/PrimaryButton';
import SecondaryButton from '../../components/Button/SecondaryButton'

function ProviderRegisterPage (props) {
  
  return (
    <div className="centered-div">
      <header className="frame-1">
        <h1 id="vaxx">Vaxx</h1>
        <h1 id="overflow">OVERFLOW</h1>
        <h3 id="heading-paragraph">Register or sign in as a Provider.</h3>
      </header>
      <div>
        <img className="illustration" src={require("../../images/OrangeVirus.svg").default} alt="Orange Virus"/>  
      </div>
      <div id="main-primary-button">
        <PrimaryButton  id="primary-button" text="REGISTER" clickAction={ ()=>{props.history.push("/pregpageone/")} }></PrimaryButton>
      </div>
      <div id="providers-secondary-button">
        <SecondaryButton text="SIGN IN" id="secondary-button" clickAction={ ()=>{props.history.push("/login/")} }/>
      </div>
    </div>
  )

};

export default ProviderRegisterPage;