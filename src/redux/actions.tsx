import { DealType } from "../types";

export const CREATE_DEAL = "CREATE_DEAL";
export const SELECTED_DEAL = "SELECTED_DEAL";
export const DELETE_SELECTED_DEALS = "DELETE_SELECTED_DEALS";

export const createDeal = (deal: DealType) => {
  return {
    type: CREATE_DEAL,
    payload: {
      deal,
    },
  };
};

export const selectDeal = (data: any) => {
  return {
    type: SELECTED_DEAL,
    payload: {
      selectedDeal: data
    },
  };
};

export const deleteSelected = () => {
  return {
    type: DELETE_SELECTED_DEALS,
    payload: {},
  };
};
