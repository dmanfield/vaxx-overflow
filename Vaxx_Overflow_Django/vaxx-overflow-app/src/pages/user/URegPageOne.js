import React, {useState} from 'react'
import { useStateValue } from '../../contextAPI/StateProvider'
import {useHistory} from 'react-router-dom' // redirect to home page

// static
import axiosInstance from '../../axios'

// styling
import PrimaryButton from '../../components/Button/PrimaryButton';
import InputField from '../../components/InputField/InputField';


const URegPageOne = (props) => {

  const [{user_form}, dispatch] = useStateValue()
  let history = useHistory()
  
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const onClickHandler =(e) => {
    dispatch({
      type: "ADD_USER_FIRST_PAGE",
      item: {
        firstName,
        lastName,
        email,
        password,
      }
    })
    history.push("/uregpagetwo/")

  }
  


  return (
    <div className="centered-div">
      <header className="frame-1">
        <h1 id="vaxx">Vaxx</h1>
        <h1 id="overflow">OVERFLOW</h1>
        <h3 id="heading-paragraph">Enter the information below to sign in.</h3>
      </header>
      <form className="initial-form">
        <InputField placeholder="" label="First Name" value={firstName} changeAction={(e) => setFirstName(e.target.value)} />
        <InputField placeholder="" label="Last Name" value={lastName} changeAction={(e) => setLastName(e.target.value)} />
        <InputField placeholder="" label="Email" value={email} changeAction={(e) => setEmail(e.target.value)} />
        <InputField placeholder="" label="Password" value={password} changeAction={(e) => setPassword(e.target.value)} />
      </form>
      <div id="main-primary-button">
        <PrimaryButton  id="primary-button" text="NEXT SECTION" clickAction={ onClickHandler} />
      </div>
    </div>
  );
};

export default URegPageOne;