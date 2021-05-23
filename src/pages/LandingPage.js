import React from 'react'
import Header from 'elements/Header'
import landingPage from 'json/landingPage.json'
import Hero from 'elements/Hero'

export const LandingPage = (props) => {
    return (
        <div>
            <Header {...props}></Header>
            <Hero data={landingPage.Hero} />
        </div>
    )
}
