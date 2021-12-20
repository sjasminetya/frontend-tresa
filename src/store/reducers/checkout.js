import { CHECKOUT_BOOKING } from "../types";

const initialState = {
  _id: '',
  duration: 1,
  date: {
    startDate: '',
    endDate: ''
  }
};

export default function checkoutReducers (state = initialState, action) {
  switch (action.type) {
    case CHECKOUT_BOOKING:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
};
