import React from 'react'
import "../images/GreenVirus.svg"

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
  </div>
  )
};

export default UserRegisterPage;