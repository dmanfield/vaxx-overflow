import React from 'react'
import '../../images/greencheckmark.svg'


const UserRegCompleted = () => {

  return (
    <div className="centered-div">
      <header className="frame-1">
        <h1 id="vaxx">Vaxx</h1>
        <h1 id="overflow">OVERFLOW</h1>
      </header>

      <div className="user-reg-success">
      <img className="green-checkmark" src={require("../../images/greencheckmark.svg").default} alt="Green Checkmark"/>
        <h3>You have been added to the list. You will receive a text message if an appoitment in your area becomes available.</h3>
      </div>
    </div>
  )
};

export default UserRegCompleted;