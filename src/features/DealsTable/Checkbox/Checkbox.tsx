import React from 'react';
import checkboxPng from '../../../assets/checkbox.png';
import checkboxSelectedPng from '../../../assets/checkbox_selected.png';

type CheckboxProps = {
  dealId: { dealId: number },
  selectedDeals: { [key: string]: boolean },
  onSelectDeal: (data: any) => any;
};

const Checkbox = (props: CheckboxProps) => {
  const { onSelectDeal, dealId: { dealId }, selectedDeals } = props;

  const isChecked = selectedDeals[dealId] || false;

  const handleChange = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onSelectDeal({ [dealId]: !isChecked})
  }

  return (
    <div className="checkbox">
      <img src={!isChecked ? checkboxPng : checkboxSelectedPng} alt="checkbox" onClick={handleChange} />
    </div>
  );
};


export default Checkbox;