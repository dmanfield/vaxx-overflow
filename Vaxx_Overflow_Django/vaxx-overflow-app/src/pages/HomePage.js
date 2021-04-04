import React from 'react'
import "../images/Illustration.svg"

function HomePage () {

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
    </div>

  )
};

export default HomePage;