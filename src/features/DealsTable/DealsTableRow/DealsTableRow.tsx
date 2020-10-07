import React from "react";
import toNumber from 'lodash/toNumber';
import { DealType } from "../../../types";

import "./DealsTableRow.scss";
import Checkbox from "../Checkbox/Checkbox";

const currencyAmountToString = (amount: string) => {
  return `$${amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
};

type DealsTableRowProps = {
  deal: DealType,
  selectedDeals: { [key: string]: boolean },
  onSelectDeal: (data: any) => any,
};

const DealsTableRow = (props: DealsTableRowProps) => {
  const {
    deal: { id, institution, dealType, dealSize, isPublished },
    selectedDeals,
    onSelectDeal
  } = props;
  return (
    <tr className='DealsTableRow'>
      <td className='DealsTableRow--cell'><Checkbox dealId={{ dealId: toNumber(id) }} selectedDeals={selectedDeals} onSelectDeal={onSelectDeal}/></td>
      <td className='DealsTableRow--cell'>{institution}</td>
      <td className='DealsTableRow--cell'>{dealType}</td>
      <td className='DealsTableRow--cell'>
        {currencyAmountToString(dealSize)}
      </td>
      <td className='DealsTableRow--cell'>{isPublished ? "Yes" : "No"}</td>
    </tr>
  );
};

export default DealsTableRow;
