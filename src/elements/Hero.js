import React from 'react'
import ImgHero from 'assets/images/images/img-hero.jpg'
import ImgHeroFrame from 'assets/images/images/img-hero-frame.jpg'
import IconCities from 'assets/images/icons/ic_cities.svg'
import IconTraveler from 'assets/images/icons/ic_traveler.svg'
import IconTreasure from 'assets/images/icons/ic_treasure.svg'
import Button from 'elements/Button'

export default function Hero(props) {
    const showMostPicked = () => {
        window.scrollTo({
            top: 
        })
    }
    return (
        <section className="container pt-5">
            <div className="row">
                <div className="col-auto" style={{width: 422, marginLeft: "2.5rem"}}>
                    <h1 className="font-weight-bold">Forget Busy Work, Start Next Vacation</h1>
                    <p className="text-gray-500 pr-5 pt-3" style={{width: 380}}>We provide what you need to enjoy your holiday with family. Time to make another memorable moments.</p>
                    <Button
                        className="btn btn-hero text-white rounded"
                        isPrimary
                        hasShadow
                        type="link"
                        href=""
                        onClick={showMostPicked}
                    >
                        Show Me Now
                    </Button>
                    <div className="mt-5 d-flex">
                        <>
                            <img src={IconTraveler} alt="Icon Traveler" />
                            <p>{props.da}</p>
                        </>
                    </div>
                </div>
            </div>
        </section>
    )
}
