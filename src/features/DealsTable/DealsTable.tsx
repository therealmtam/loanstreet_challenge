import React from "react";
import { DealType } from "../../types";
import DealsTableRow from "./DealsTableRow/DealsTableRow";
import "./DealsTable.scss";

type DealsTableProps = {
  deals?: DealType[],
  selectedDeals?: { [key: string]: boolean }
  onSelectDeal: (data: any) => any;
  onDeleteSelected: () => any
}

const DealsTable = (props: DealsTableProps) => {
  const { deals = [], selectedDeals = {}, onSelectDeal, onDeleteSelected } = props;

  const dealsTableRows = deals.map((deal) => (
    <DealsTableRow key={deal.id} deal={deal} selectedDeals={selectedDeals} onSelectDeal={onSelectDeal} />
  ));

  return (
    <div className="tile">
      <div className="tile--header">Deal Portfolio</div>
      <div>
        <button className='DealsTable--button' onClick={onDeleteSelected}>
          Delete Selected
        </button>
      </div>
      <table className='DealsTable'>
        <thead>
          <tr>
            <th className='DealsTable--headerCell' style={{ padding: '5px'}}></th>
            <th className='DealsTable--headerCell'>Institution</th>
            <th className='DealsTable--headerCell'>Deal Type</th>
            <th className='DealsTable--headerCell'>Deal Size</th>
            <th className='DealsTable--headerCell'>Is Published?</th>
          </tr>
        </thead>
        <tbody>{dealsTableRows}</tbody>
      </table>
    </div>
  );
};

export default DealsTable;
