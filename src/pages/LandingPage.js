import React, { useRef } from 'react'
import Header from 'elements/Header'
import landingPage from 'json/landingPage.json'
import Hero from 'elements/Hero'
import MostPicked from 'elements/MostPicked'

export const LandingPage = (props) => {
    const refMostPicked = useRef()
    return (
        <div>
            <Header {...props}></Header>
            <Hero refMostPicked={refMostPicked} data={landingPage.hero} />
            <MostPicked refMostPicked={refMostPicked} data={landingPage.mostPicked} />
        </div>
    )
}
