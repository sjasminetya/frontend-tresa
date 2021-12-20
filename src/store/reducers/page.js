import { FETC_PAGE } from "../types";

const initialState = {
  landingPage: {
    hero: {
      travelers: 0,
      treasures: 0,
      cities: 0
    },
    mostPicked: [],
    category: [],
    testimonial: {
      _id: '',
      imageUrl: '',
      name: '',
      rate: 0,
      content: '',
      familyName: '',
      familyOccupation: ''
    }
  },
  detail: {
    country: "",
    unit: "",
    sumBooking: 0,
    isPopular: false,
    imageId: [],
    featureId: [],
    activityId: [],
    _id: "",
    title: "",
    price: 0,
    city: "",
    description: "",
    categoryId: "",
    bank: [],
    testimonial: {
      _id: '',
      imageUrl: '',
      name: '',
      rate: 0,
      content: '',
      familyName: '',
      familyOccupation: ''
    }
  }
};

export default function pageReducers(state = initialState, action) {
  switch (action.type) {
    case FETC_PAGE:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
};
