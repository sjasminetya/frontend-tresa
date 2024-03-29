import axios from "../../configs/axios";
import { FETC_PAGE } from "../types";

export const fetchPage = (url, page) => (dispatch) => {
  return axios.get(url).then(response => {
    if (response) {
      dispatch({
        type: FETC_PAGE,
        payload: {
          [page]: { ...response.data.data, finishFetch: true }
        }
      })
    }
  })
};
