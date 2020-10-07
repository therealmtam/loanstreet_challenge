import { connect } from "react-redux";
import DealsTable from "./DealsTable";
import { DealsListType } from "../../types";
import { deleteSelected, selectDeal } from "../../redux/actions";

const mapStateToProps = (state: DealsListType) => {
  const { deals, selectedDeals } = state;
  return {
    deals,
    selectedDeals
  };
};

type DispatchType = (arg0: {
  type: string;
  payload: { selectedDeal?: number };
}) => any;

const mapDispatchToProps = (dispatch: DispatchType) => ({
  onSelectDeal: (data: any) => dispatch(selectDeal(data)),
  onDeleteSelected: () => dispatch(deleteSelected())
});

export default connect(mapStateToProps, mapDispatchToProps)(DealsTable);
