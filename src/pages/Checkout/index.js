/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Header from 'components/layouts/Header';
import Fade from 'react-reveal/Fade';
import Button from 'components/elements/Button';
import Stepper, { Numbering, MainContent, Meta, Controller } from 'components/elements/Stepper';
import Booking from 'components/elements/Checkout/Booking';
import Payment from 'components/elements/Checkout/Payment';
import Completed from 'components/elements/Checkout/Completed';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { submitBooking } from 'store/action/checkout';

export default function Checkout() {
  const [state, setState] = useState({
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: [],
      bankName: "",
      bankHolder: ""
    }
  });
  const checkout = useSelector(state => state.checkout);
  const { detail } = useSelector(state => state.page);
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setState({
      data: {
        ...state.data,
        [e.target.name]: e.target.value
      }
    })
  }

  const steps = {
    bookingInformation: {
      title: "Booking Information",
      description: "Please fill up the blank fields below",
      content: (
        <Booking
          data={state.data}
          checkout={checkout}
          ItemDetails={detail}
          onChange={onChange}
        />
      )
    },
    payment: {
      title: "Payment",
      description: "Kindly follow the instructions below",
      content: (
        <Payment
          data={state.data}
          ItemDetails={detail}
          checkout={checkout}
          onChange={onChange}
        />
      )
    },
    completed: {
      title: "Yay! Completed",
      description: null,
      content: <Completed />
    }
  }

  const submit = (nextStep) => {
    const payload = new FormData();
    payload.append("firstName", state.data.firstName);
    payload.append("lastName", state.data.lastName);
    payload.append("email", state.data.email);
    payload.append("phoneNumber", state.data.phone);
    payload.append("accountHolder", state.data.bankHolder);
    payload.append("bankFrom", state.data.bankName);
    payload.append("duration", checkout.duration);
    payload.append("bookingStartDate", checkout.date.startDate);
    payload.append("bookingEndDate", checkout.date.endDate);
    payload.append("idItem", checkout._id);
    payload.append("image", state.data.proofPayment[0]);

    setLoading(true);
    submitBooking(payload).then(() => {
      setLoading(false);
      nextStep()
    }).catch(err => {
      setLoading(false);
    })
  }

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <>
      <Header isCenter />
      {
        detail._id === "" ? (
          <div className='d-flex flex-column justify-content-center align-items-center checkout'>
            <h3>Booking not found</h3>
            <Button
              className="btn mt-3 btn-checkout"
              type="button"
              isBlock
              isPrimary
              hasShadow
              onClick={() => history.push("/")}
            >
              Back to home
            </Button>
          </div>
        ) : (
          <Stepper steps={steps}>
            {
              (prevStep, nextStep, currentStep, steps) => (
                <>
                  <Numbering
                    data={steps}
                    current={currentStep}
                    style={{ marginBottom: 50, marginTop: 50 }}
                  />
                  <Meta data={steps} current={currentStep} />
                  <MainContent data={steps} current={currentStep} />

                  {
                    currentStep === "bookingInformation" && (
                      <Controller>
                        {
                          state.data.firstName !== "" && state.data.lastName !== "" && state.data.email !== "" && state.data.phone !== "" && (
                            <Fade>
                              <Button
                                className="btn mb-3"
                                type="button"
                                isBlock
                                isPrimary
                                hasShadow
                                onClick={nextStep}
                              >
                                Continue to Book
                              </Button>
                            </Fade>
                          )
                        }
                        <Button
                          className="btn cancel-book"
                          type="link"
                          isBlock
                          href={`/properties/${detail._id}`}
                        >
                          Cancel
                        </Button>
                      </Controller>
                    )
                  }

                  {
                    currentStep === "payment" && (
                      <Controller>
                        {
                          state.data.proofPayment.length > 0 && state.data.bankName !== "" && state.data.bankHolder !== "" && (
                            <Fade>
                              <Button
                                className="btn mb-3"
                                type="button"
                                isBlock
                                isPrimary
                                hasShadow
                                onClick={() => submit(nextStep)}
                                isLoading={loading}
                              >Continue to Book</Button>
                            </Fade>
                          )
                        }
                        <Button
                          className="btn"
                          type="link"
                          isBlock
                          href={`/properties/${detail._id}`}
                        >
                          Cancel
                        </Button>
                      </Controller>
                    )
                  }

                  {
                    currentStep === "completed" && (
                      <Controller>
                        <Button
                          className="btn d-flex justify-content-center"
                          type="link"
                          isBlock
                          isPrimary
                          hasShadow
                          href=""
                        >Back to Home</Button>
                      </Controller>
                    )
                  }
                </>
              )
            }
          </Stepper>
        )
      }
    </>
  )
}
