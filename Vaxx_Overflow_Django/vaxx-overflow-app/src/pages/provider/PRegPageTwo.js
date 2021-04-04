import React, {useState} from 'react';
import {useStateValue} from '../../contextAPI/StateProvider'
import {useHistory} from 'react-router-dom'
import axiosInstance from '../../axios'

import PrimaryButton from '../../components/Button/PrimaryButton';
import InputField from '../../components/InputField/InputField';


const PRegPageTwo =(props)=> {
  const [{form}, dispatch] = useStateValue()
  let history = useHistory()

  const [organizationName, setOrganizationName] = useState("")
  const [organizationEmail, setOrganizationEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  //state

  const sendPostRequest = async () => {
    try {
      console.log(form)
      const res = await axiosInstance.post(`/clinic/register/`, {
          first_name: form?.firstName,
          last_name: form?.lastName,
          email: form?.email,
          password: form?.password,
          provider_name: form?.organizationName,
          business_email: form?.organizationEmail,
          business_phone: form?.phoneNumber
      })

      history.push("/login/")
      console.log(res.data)
      
    } catch (err) {
      console.log(err)
    }
  }
  const onClickHandler = async (e) => {
    dispatch({
      type: "ADD_SECOND_PAGE",
      item: {
        organizationName,
        organizationEmail,
        phoneNumber,
      }
    })

    sendPostRequest()
  }
  
  return (
    <div className="centered-div">
      <header className="frame-1">
        <h1 id="vaxx">Vaxx</h1>
        <h1 id="overflow">OVERFLOW</h1>
        <h3 id="heading-paragraph">Health Organization Details</h3>
      </header>
      <form className="initial-form">
        <InputField placeholder="" label="Organization Name" value={organizationName} changeAction={(e) => setOrganizationName(e.target.value)} />
        <InputField placeholder="" label="Organization Email" value={organizationEmail} changeAction={(e) => setOrganizationEmail(e.target.value)}/>
        <InputField placeholder="" label="Phone Number" value={phoneNumber} changeAction={(e) => setPhoneNumber(e.target.value)}/>
      </form>
      <div id="main-primary-button">
        <PrimaryButton  id="primary-button" text="SUBMIT" clickAction={onClickHandler}/>
      </div>
    </div>
  );
};

export default PRegPageTwo;