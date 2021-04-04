function UserScreeningPage() {
  
  return (
    <div className="centered-div">
    <header className="frame-1">
      <h1 id="vaxx">Vaxx</h1>
      <h1 id="overflow">OVERFLOW</h1>
    </header>
    <div>
      <h3>
        Next, fill out a screening form to check your elegibilty with local and CDC guidelines.
      </h3>
    </div>
    <div>
      <h2>
        1 - Have you recieved a Covid-19 authorization? 
      </h2>
      <input type="radio" name="yes" value="yes"> Yes </input>
      <input type="radio" name="no" value="no"> No </input>
    </div>
    <div>
      <h2>
        2 - Do you feel sick, or have you experienced any of these symptoms in the last 24 hours:
      </h2>
        <h3> 104º<span>&#176;</span> fever, sore throat, cough, shortness of breath, headache, nausea, vomiting, diarrhea, loss of taste or smell, chills.</h3>
      <input type="radio" name="yes" value="yes"> Yes </input>
      <input type="radio" name="no" value="no"> No </input>
    </div>
    <div>
      <h2>
        3 - Have you tested positive for Covid-19 in the last two weeks?
      </h2>
      <input type="radio" name="yes" value="yes"> Yes </input>
      <input type="radio" name="no" value="no"> No </input>
    </div>
    <div>
      <h2>
        4 - Do you have chronic health conditions such as:
      </h2>
      <h3>Cancer, kidney disease, autoimmune disease, chronic lung disease, obesity, sickle cell disease, diabetes, heart disease, or any chronic condition?</h3>
      <input type="radio" name="yes" value="yes"> Yes </input>
      <input type="radio" name="no" value="no"> No </input>
    </div>
    <div id="main-primary-button">
        <PrimaryButton  id="primary-button" text="NEXT SECTION" clickAction={ onClickHandler }/>
      </div>
  
  </div>
  )
};