/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import InputDate from 'components/fields/InputDate';
import Number from 'components/fields/InputNumber';
import Button from 'components/elements/Button';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import moment from 'moment';

export default function InputBooking({ data, startBooking }) {
  const [nights, setNights] = useState(1);
  const [date, setDate] = useState({ startDate: new Date(), endDate: new Date(), key: 'selection' });
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = e => {
    setNights(e.target.value)
  };

  const handleDateChange = e => {
    setDate(e)
  };

  const booking = () => {
    dispatch(startBooking({
      _id: data._id,
      duration: nights,
      date: {
        startDate: moment(date.startDate).format(""),
        endDate: moment(date.endDate).format(""),
      }
    }));
    history.push("/checkout");
  };

  useEffect(() => {
    if (nights > 1) {
      const startDate = new Date(date.startDate);
      const endDate = new Date(startDate.setDate(startDate.getDate() + nights - 1));
      setDate({
        ...date,
        endDate: endDate
      })
    }
  }, [nights])

  return (
    <div className="border rounded-lg p-5">
      <h4>Start Booking</h4>
      <h1 className="text-teal">${data.price} <span className="text-gray-500 font-weight-light" style={{ fontWeight: 200 }}>per nights</span></h1>
      <h6 className="pt-2">How long you will stay?</h6>
      <Number
        max={30}
        name="nights"
        onChange={handleChange}
        value={nights}
        suffix=" night"
        isSuffixPlural
      />
      <h6 className="pt-2">Pick a Date</h6>
      <InputDate
        onChange={handleDateChange}
        name="date"
        value={date}
      />
      <h6 className="pt-2 text-gray-500 font-weight-light">You will pay <span className="text-gray-900">${data.price * nights} USD</span>  per <span className="text-gray-900">{nights} {+nights > 1 ? "nights" : "night"}</span> </h6>
      <Button className="btn mt-2" isBlock hasShadow isPrimary onClick={booking}>
        Continue to Book
      </Button>
    </div>
  )
}
