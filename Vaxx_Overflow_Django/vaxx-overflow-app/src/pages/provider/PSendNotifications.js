import React from 'react';
import PrimaryButton from '../../components/Button/PrimaryButton';
import InputField from '../../components/InputField/InputField';
import DropForm from  '../../components/DropForm/DropForm';
import CheckBox from '../../components/CheckBox/InlineCheckbox';
import Selector from '../../components/QuantitySelector';




const PRegPageOne =()=> {
  return (
    <div className="centered-div">
      <header className="frame-1">
        <h1 id="vaxx">Vaxx</h1>
        <h1 id="overflow">OVERFLOW</h1>
        <h3 id="heading-paragraph">Register as a Provider.</h3>
      </header>
      <div>
        <DropForm label={'Current CDC Phase'} options={['1(a)', '1(b)', '1(c)', '2']} />
      </div>
      <div className="buttons-list">
        <h4>Additional criteria for eligibility</h4>
        <div style={{display: "grid"}}>
          <CheckBox class="checkbox" label="School staff members or Childcare Workers"/>
          <CheckBox class="checkbox" label="Healthcare Workers"/>
          <CheckBox class="checkbox" label="Ages 16+"/>
          <CheckBox class="checkbox" label="High Risk Medical Conditions"/>
          <CheckBox class="checkbox" label="Residents or stf of congregate living facility"/>
        </div>
        <h4>Number of Doses Available</h4>
        <div className="selectors-list">
        <Selector label="Pfizer- BioNTech"/>
        <Selector label='Johnson & Johnson'/>
        <Selector  label="Moderna"/>
        </div>
      </div>
      <div id="main-primary-button">
        <PrimaryButton  id="primary-button" text="send notifications" />
      </div>
    </div>
  );
};

export default PRegPageOne;