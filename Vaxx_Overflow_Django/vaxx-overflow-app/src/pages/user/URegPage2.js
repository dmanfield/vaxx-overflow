import PrimaryButton from '../../components/Button/PrimaryButton';
import InputField from '../../components/InputField/InputField';
import DropForm from '../../components/DropForm/DropForm';
import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { useStateValue } from '../../contextAPI/StateProvider'



const URegPageTwo =(props)=> {
  const [{user_form}, dispatch] = useStateValue()
  let history = useHistory()

  // state
  const [gender, setGender] = useState("")
  const [phone, setPhone] = useState("")
  const [zipcode, setZipcode] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")

  const onClickHandler =(e) => {

    dispatch({
      type: "ADD_USER_SECOND_PAGE",
      item: {
        gender,
        phone,
        zipcode,
        dateOfBirth,
      }
    })
    history.push("/uregscreening/")
    
    
  }


  return (
    <div className="centered-div">
      <header className="frame-1">
        <h1 id="vaxx">Vaxx</h1>
        <h1 id="overflow">OVERFLOW</h1>
        <h3 id="heading-paragraph">We first need to gather your personal and health demographic information.</h3>
      </header>
      <div className="input-form">
      <form className=" tip">
        <DropForm placeholder="" label="Gender" options={['Male', 'Female', 'Other/Prefer not to say']} value={gender} changeAction={(e) => setGender(e.target.value)} />
        <InputField placeholder="" label="Phone" value={phone} changeAction={(e) => setPhone(e.target.value)}/>
        <InputField placeholder="" label="Zipcode" value={zipcode} changeAction={(e) => setZipcode(e.target.value)}/>
        <InputField placeholder="" label="Date of Birth" value={dateOfBirth} changeAction={(e) => setDateOfBirth(e.target.value)} />
      </form>
      </div>
      <div id="main-primary-button">
        <PrimaryButton  id="primary-button" text="SUBMIT" clickAction={ onClickHandler } />
      </div>
    </div>
  );
};

export default URegPageTwo; 