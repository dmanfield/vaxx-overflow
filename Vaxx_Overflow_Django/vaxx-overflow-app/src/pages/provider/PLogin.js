import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import PrimaryButton from '../../components/Button/PrimaryButton';
import InputField from '../../components/InputField/InputField';
import axiosInstance from '../../axios'

const SendNotifications =(props)=> {
  let history = useHistory()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const sendPostRequest = () => {
    axiosInstance.post(`token/`, {
      "email": email,
      "password": "wrong password"
    }).then((res) => {
      console.log(res.data)
      localStorage.setItem('access_token', res.data.access);
      localStorage.setItem('refresh_token', res.data.refresh);
      axiosInstance.defaults.headers['Authorization'] = 'JWT ' + localStorage.getItem('access_token');
    })
  }
  const onSubmitHandler = (e) => {
    sendPostRequest()
    history.push("/send/")
  }

  return (
    <div className="centered-div">
      <header className="frame-1">
        <h1 id="vaxx">Vaxx</h1>
        <h1 id="overflow">OVERFLOW</h1>
        <h3 id="heading-paragraph">Register as a Provider.</h3>
      </header>
      <form className="initial-form">
        <InputField placeholder="" label="Email" value={email} changeAction={(e) => setEmail(e.target.value)}/>
        <InputField placeholder="" label="Password" value={password} changeAction={(e) => setPassword(e.target.value)}/>
      </form>
      <div id="main-primary-button">
        <PrimaryButton  id="primary-button" text="login" clickAction={ onSubmitHandler }/>
      </div>
    </div>
  );
};

export default SendNotifications;
