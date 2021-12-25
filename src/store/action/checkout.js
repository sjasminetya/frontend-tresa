import axios from "../../configs/axios";
import { CHECKOUT_BOOKING } from "../types";

export const checkoutBooking = (payload) => (dispatch) => {
  dispatch({
    type: CHECKOUT_BOOKING,
    payload
  });
};

export const submitBooking = (payload) => {
  return axios.post("/booking", payload, { headers: { contentType: "multipart/form-data" } })
};
