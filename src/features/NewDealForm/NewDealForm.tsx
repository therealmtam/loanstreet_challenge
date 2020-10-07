import React, { useState } from "react";
import noop from "lodash/noop";
import isEmpty from "lodash/isEmpty";
import classnames from 'classnames';
import { DealType } from "../../types";
import newDealFormStyles from "./NewDealForm.module.scss";
import styleGuide from "../../styleGuide.module.scss";

type DealFormProps = {
  onCreateDeal: (deal: DealType) => any;
};

type DealFormValidFields = {
  institution: boolean,
  dealType: boolean,
  dealSize: boolean,
}

const DEFAULT_DEAL: DealType = {
  id: 0,
  institution: "",
  dealType: "",
  dealSize: "",
  isPublished: false,
};

const DEFAULT_VALID_FIELDS: DealFormValidFields = {
  institution: true,
  dealType: true,
  dealSize: true,
};


const DealForm = (props: DealFormProps) => {
  const { onCreateDeal = noop } = props;
  const [newDeal, setNewDeal] = useState(DEFAULT_DEAL);
  const [validFields, setValidFields] = useState(DEFAULT_VALID_FIELDS);

  const handleUpdateProperty = (property: string) => (
    e: React.ChangeEvent<any>
  ) => setNewDeal({ ...newDeal, [property]: e.target.value });

  const handleCreateDeal = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // set the validation status of each field
    validFields.institution = !isEmpty(newDeal.institution)
    validFields.dealType = !isEmpty(newDeal.dealType)
    validFields.dealSize = !isEmpty(newDeal.dealSize)

    // determine if all fields are valid
    let allFieldsAreValid = true;
    if (!validFields.institution) allFieldsAreValid = false;
    if (!validFields.dealType) allFieldsAreValid = false;
    if (!validFields.dealSize) allFieldsAreValid = false;

    // create deal if all fields are valid
    if (allFieldsAreValid) {
      onCreateDeal({ ...newDeal });
      // Reset state for the next deal input.
      setNewDeal({ ...DEFAULT_DEAL });
      setValidFields({ ...DEFAULT_VALID_FIELDS });
    }

    // set the valid fields state to rerender view
    setValidFields({ ...validFields });
  };

  const renderInputFieldErrorTextOrSpacer = (errorText?: string) => (
    <p className={styleGuide.fieldsErrorText}>{errorText}</p>
  );

  return (
    <form className='NewDealForm tile'>
      {(() => { console.log('isValid ', validFields)})()}
      <div className='tile--header'>Add New Deal</div>
      <div className={newDealFormStyles['NewDealForm--div']}>
        <label className={
          classnames({
            [newDealFormStyles['NewDealForm--label']]: true,
            [styleGuide.fieldsErrorLabel]: !validFields.institution
        })}>Institution</label>
        <input
          className={
            classnames({
              [newDealFormStyles['NewDealForm--input']]: true,
              [styleGuide.fieldsErrorFieldBox]: !validFields.institution
            })
          }
          value={newDeal.institution}
          placeholder='LS Credit Union'
          onChange={handleUpdateProperty("institution")}
          required
        />
        {renderInputFieldErrorTextOrSpacer(validFields.institution ? '' : 'field cannot be empty')}
      </div>
      <div className={newDealFormStyles['NewDealForm--div']}>
        <label className={
          classnames({
            [newDealFormStyles['NewDealForm--label']]: true,
            [styleGuide.fieldsErrorLabel]: !validFields.dealType
        })}>Deal Type</label>
        <input
          className={
            classnames({
              [newDealFormStyles['NewDealForm--input']]: true,
              [styleGuide.fieldsErrorFieldBox]: !validFields.dealType
            })
          }
          value={newDeal.dealType}
          placeholder='Consumer Auto'
          onChange={handleUpdateProperty("dealType")}
          required
        />
        {renderInputFieldErrorTextOrSpacer(validFields.institution ? '' : 'field cannot be empty')}
      </div>
      <div className={newDealFormStyles['NewDealForm--div']}>
        <label className={
          classnames({
            [newDealFormStyles['NewDealForm--label']]: true,
            [styleGuide.fieldsErrorLabel]: !validFields.dealSize
        })}>Deal Size</label>
        <input
          className={
            classnames({
              [newDealFormStyles['NewDealForm--input']]: true,
              [styleGuide.fieldsErrorFieldBox]: !validFields.dealSize
            })
          }
          value={newDeal.dealSize}
          placeholder='$1,000,000'
          onChange={handleUpdateProperty("dealSize")}
          required
        />
        {renderInputFieldErrorTextOrSpacer(validFields.institution ? '' : 'field cannot be empty')}
      </div>
      <button className={newDealFormStyles['NewDealForm--button']} onClick={handleCreateDeal}>
        Create Deal
      </button>
    </form>
  );
};

export default DealForm;
