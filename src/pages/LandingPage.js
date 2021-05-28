import React from 'react'
import Header from 'elements/Header'
import landingPage from 'json/landingPage.json'
import Hero from 'elements/Hero'
import MostPicked from 'elements/MostPicked'

export const LandingPage = (props) => {
    return (
        <div>
            <Header {...props}></Header>
            <Hero data={landingPage.hero} />
            <MostPicked data={landingPage.mostPicked} />
        </div>
    )
}
