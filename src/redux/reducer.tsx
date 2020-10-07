import has from 'lodash/has';
import { CREATE_DEAL, SELECTED_DEAL, DELETE_SELECTED_DEALS } from "./actions";
import { DealType, DealsListType } from "../types";

let nextDealId = 3;

export const initialState: DealsListType = {
  deals: [
    {
      id: 1,
      institution: "LS Credit Union",
      dealSize: "1000000",
      dealType: "Consumer Auto",
      isPublished: true,
    },
    {
      id: 2,
      institution: "LS Credit Union",
      dealSize: "5000000",
      dealType: "Real Estate",
      isPublished: false,
    },
  ],
  selectedDeals: {}
};

type ActionType = {
  type: string;
  payload: { deal: DealType, selectedDeal?: { [key: string]: boolean } };
};

export default (state = initialState, action: ActionType) => {
  switch (action.type) {
    case CREATE_DEAL:
      return {
        ...state,
        deals: [...state.deals, { ...action.payload.deal, id: nextDealId++ }],
      };
    case SELECTED_DEAL:
      return {
        ...state,
        selectedDeals: Object.assign({}, state.selectedDeals, action.payload.selectedDeal),
      };
    case DELETE_SELECTED_DEALS:
      return {
        ...state,
        deals: state.deals.filter((deal) => !has(state.selectedDeals, deal.id)),
        selectedDeals: {}, // reset selected deals
      };
    default:
      return state;
  }
};
