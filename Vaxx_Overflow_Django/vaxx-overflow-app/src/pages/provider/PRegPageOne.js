import React, {useState} from 'react'
import {useHistory} from 'react-router-dom' // redirect to home page

// static
import axiosInstance from '../../axios'

// styling
import PrimaryButton from '../../components/Button/PrimaryButton';
import InputField from '../../components/InputField/InputField';


const PRegPageOne =()=> {
  const [values, setValues] = useState({"firstName": ""})
  // const SignUp = () => {
  //   const history = useHistory();
  //   // prevent user from changing data (security)
  //   const initialFormData = Object.freeze({
  //     email: '',
  //     username: '',
  //     password: '',
  //   })
  // }

  // const changeHandler = (e) => {
  //   updateFormData({
  //     ...formData,
  //     // Trim whitespace
  //     [e.target.name]: e.target.value.trim(),
  //   })
  // }

  // const onSubmitHandler = (e) => {
  //   e.preventDefault()
  //   console.log(formData);

  //   axiosInstance.post(`/api/token/adf`)
  // }
  const onClickHandler = (e) => {
    e.preventDefault()
    console.log("i was clicked")
  }

  const onChangeHandler = (e) => {
    // setValues({"firstName": e.target.value})
    console.log(e.target.value)
  }

  console.log(InputField)

  return (
    <div className="centered-div">
      <header className="frame-1">
        <h1 id="vaxx">Vaxx</h1>
        <h1 id="overflow">OVERFLOW</h1>
        <h3 id="heading-paragraph">Register as a Provider.</h3>
      </header>
      <form className="initial-form">
        <InputField placeholder="" label="First Name" value={values.firstName} changeAction={(e) => console.log(e.target.value)}/>
        <InputField placeholder="" label="Last Name"/>
        <InputField placeholder="" label="Email Name"/>
        <InputField placeholder="" label="Password Name"/>
      </form>
      <div id="main-primary-button">
        <PrimaryButton  id="primary-button" text="REGISTER" clickAction={() => console.log("clicked45")}/>
      </div>
    </div>
  );
};

export default PRegPageOne;