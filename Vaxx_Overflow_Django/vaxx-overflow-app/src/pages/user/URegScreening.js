import SecondaryButton from '../../components/Button/SecondaryButton';
import CheckBox from '../../components/CheckBox/InlineCheckbox';
// import InputField from '../../components/InputField/InputField';

function UserScreeningPage() {
  
  return (
    <div className="centered-div">
    <header className="frame-1">
      <h1 id="vaxx">Vaxx</h1>
      <h1 id="overflow">OVERFLOW</h1>
      <br></br>
      <h3 id="heading-paragraph">Next, fill out a screening form to check your elegibilty with local and CDC guidelines.</h3>
    </header>
<br></br>
<br></br>
    <div className="long-con">
      <div className="long-box">
        <CheckBox label={"1 - Have you recieved a Covid-19 authorization?"}></CheckBox>
      </div>
      <div className="long-box">
        <CheckBox label={"2 - Do you feel sick, or have you experienced any of these symptoms in the last 24 hours: 104º fever, sore throat, cough, shortness of breath, headache, nausea, vomiting, diarrhea, loss of taste or smell, chills."}></CheckBox>
      </div>
      <div className="long-box">
        <CheckBox label={"3 - Have you tested positive for Covid-19 in the last two weeks?"}></CheckBox>
        </div>
      <div className="long-box">
       <CheckBox label={"4 - Do you have chronic health conditions such as: Cancer, kidney disease, autoimmune disease, chronic lung disease, obesity, sickle cell disease, diabetes, heart disease, or any chronic condition?"}></CheckBox>
       </div>
    </div>
    <div id="providers-secondary-button">
        <SecondaryButton text="next" id="secondary-button"  />
      </div>
  </div>
  )
};

export default UserScreeningPage;