import Title from 'elements/DetailPage/Title'
import Header from 'elements/Header'
import React, { useEffect } from 'react'
import details from 'json/itemDetails.json'
import Image from 'elements/DetailPage/Image'
import Description from '../elements/DetailPage/Description'
import InputBooking from 'elements/DetailPage/InputBooking'

export const DetailPage = (props) => {
    useEffect(() => {
        window.Title = "Tresa | Details Page"
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Header {...props} />
            <Title data={details} />
            <Image image={details.imageUrls} />
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <Description data={details} />
                    </div>
                    <div className="col-5">
                        <InputBooking data={details} />
                    </div>
                </div>
            </div>
        </div>
    )
}
