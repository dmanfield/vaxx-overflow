
import React from 'react'
import "../images/Illustration.svg"
import PrimaryButton from '../components/Button/PrimaryButton'
import SecondaryButton from '../components/Button/SecondaryButton'


const HomePage = (props) => {

  return(
    <div className="centered-div">
      <header className="frame-1">
        <h1 id="vaxx">Vaxx</h1>
        <h1 id="overflow">OVERFLOW</h1>
        <h3 id="heading-paragraph">Real time connections for Providers and Vaccine Seekers</h3>
      </header>
      <div>
        <img className="illustration" src={require("../images/Illustration.svg").default} alt="Illustration"/>  
      </div>
      <div id="main-primary-button">
        <PrimaryButton  id="primary-button" text="PROVIDERS" clickAction={ ()=>{props.history.push("/providerregistration/")} }></PrimaryButton>
      </div>
      <div id="providers-secondary-button">
        <SecondaryButton text="GET VACCINATED" id="secondary-button" clickAction={ ()=> {props.history.push("/userregistration/")}}/>
      </div>
    </div>
  )
};

export default HomePage;