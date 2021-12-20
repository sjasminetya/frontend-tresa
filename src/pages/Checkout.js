import React, { useEffect, useState } from 'react';
import Header from 'elements/Header';
import Fade from 'react-reveal/Fade';
import Button from 'elements/Button';
import Stepper, { Numbering, MainContent, Meta, Controller } from 'elements/Stepper';
import Booking from 'elements/Checkout/Booking';
import Payment from 'elements/Checkout/Payment';
import Completed from 'elements/Checkout/Completed';
import { useSelector } from 'react-redux';

export default function Checkout() {
	const [state, setState] = useState({
		data: {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			proofPayment: "",
			bankName: "",
			bankHolder: ""
		}
	});
  const checkout = useSelector(state => state.checkout);
  const { detail } = useSelector(state => state.page);

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

	useEffect(() => {
		window.scroll(0, 0)
	}, [])

	return (
		<>
			<Header isCenter />
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
											state.data.proofPayment !== "" && state.data.bankName !== "" && state.data.bankHolder !== "" && (
												<Fade>
													<Button
														className="btn mb-3"
														type="button"
														isBlock
														isPrimary
														hasShadow
														onClick={nextStep}
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
											className="btn"
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
		</>
	)
}
