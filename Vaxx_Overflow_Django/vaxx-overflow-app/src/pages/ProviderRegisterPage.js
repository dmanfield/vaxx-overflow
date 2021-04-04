import React from 'react'


function ProviderRegisterPage () {
  
  return (
    <div>
      <header className="frame-1">
        <h1 id="vaxx">Vaxx</h1>
        <h1 id="overflow">OVERFLOW</h1>
        <h3 id="heading-paragraph">Register or sing in as a Provider.</h3>
      </header>
      <div>
        <img id= "orangevirus" src={require("../images/OrangeVirus.svg").default} alt="Orange Virus"/>  
      </div>
    </div>
  )

};

export default ProviderRegisterPage;