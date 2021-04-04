import React from 'react';
import PrimaryButton from '../../components/Button/PrimaryButton';
import CheckBox from '../../components/CheckBox/InlineCheckbox';



const URegPageFour = (props) => {

  return (
    <div className="centered-div">
      <header className="frame-1">
        <h1 id="vaxx">Vaxx</h1>
        <h1 id="overflow">OVERFLOW</h1>
        <h3 id="heading-paragraph">Please answer the following to the best of your ability.</h3>
      </header>
      <div className="buttons-list">
        <h4>Additional criteria for eligibility</h4>
        <div style={{display: "grid"}}>
          <CheckBox class="checkbox" label="School staff members or Childcare Workers"/>
          <CheckBox class="checkbox" label="Healthcare Workers"/>
          <CheckBox class="checkbox" label="Ages 16+"/>
          <CheckBox class="checkbox" label="High Risk Medical Conditions"/>
          <CheckBox class="checkbox" label="Residents or staff of congregate living facility"/>
        </div>
      </div>
      <div id="main-primary-button" style={{padding: "100px"}}>
        <PrimaryButton  id="primary-button" text="SUBMIT" clickAction={ ()=>{props.history.push("/userregcompleted/")} } />
      </div>
    </div>
  );
};

export default URegPageFour; 