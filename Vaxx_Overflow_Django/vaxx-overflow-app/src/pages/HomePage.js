import React from 'react'
import "../images/Illustration.svg"
import PrimaryButton from '../components/Button/PrimaryButton'
import SecondaryButton from '../components/Button/SecondaryButton'


const HomePage = (props) => {

  return(
    <div >
      <header className="frame-1">
        <h1 id="vaxx">Vaxx</h1>
        <h1 id="overflow">OVERFLOW</h1>
        <h3 id="heading-paragraph">Real time connections for Providers and Vaccine Seekers</h3>
      </header>
      <div>
        <img id= "illustration" src={require("../images/Illustration.svg").default} alt="Illustration"/>  
      </div>
      <div id="main-primary-button">
        <PrimaryButton  id="primary-button" text="PROVIDERS" onClick={ console.log("fuck") }></PrimaryButton>
      </div>
      <div id="providers-secondary-button">
        <SecondaryButton text="GET VACCINATED" id="secondary-button" />
      </div>
    </div>

  )
};

export default HomePage;