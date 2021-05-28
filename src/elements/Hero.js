import React from 'react'
import ImgHero from 'assets/images/images/img-hero.jpg'
import ImgHeroFrame from 'assets/images/images/img-hero-frame.jpg'
import IconCities from 'assets/images/icons/ic_cities.svg'
import IconTraveler from 'assets/images/icons/ic_traveler.svg'
import IconTreasure from 'assets/images/icons/ic_treasure.svg'
import Button from 'elements/Button'
import { numberFormat } from 'utils'

export default function Hero(props) {
    const showMostPicked = () => {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        })
    }

    return (
        <section className="container" style={{ marginTop: 60 }}>
            <div className="row h-auto">
                <div className="col-auto" style={{ width: 490, marginLeft: "2rem" }}>
                    <h1 className="font-weight-bold" style={{ lineHeight: "63px" }}>Forget Busy Work, <br /> Start Next Vacation</h1>
                    <p className="text-gray-500 pt-3" style={{ paddingRight: 80, lineHeight: "170%" }}>We provide what you need to enjoy your holiday with family. Time to make another memorable moments.</p>
                    <Button
                        className="btn-hero text-center rounded mt-3"
                        isPrimary
                        hasShadow
                        type="link"
                        href=""
                        onClick={showMostPicked}
                    >
                        Show Me Now
                    </Button>
                    <div className="mt-4 row">
                        <div className="col-auto mt-5">
                            <img width="36" height="36" src={IconTraveler} alt={`${numberFormat(props.data.travelers)} Travelers`} />
                            <h6 className="pt-3">{numberFormat(props.data.travelers)} <span className="text-gray-500">travelers</span></h6>
                        </div>
                        <div className="col-auto mt-5" style={{ marginLeft: 30 }}>
                            <img width="36" height="36" src={IconTreasure} alt={`${numberFormat(props.data.treasures)} Treasures`} />
                            <h6 className="pt-3">{numberFormat(props.data.treasures)} <span className="text-gray-500">treasures</span></h6>
                        </div>
                        <div className="col-auto mt-5" style={{ marginLeft: 20 }}>
                            <img width="36" height="36" src={IconCities} alt={`${numberFormat(props.data.cities)} Cities`} />
                            <h6 className="pt-3">{numberFormat(props.data.cities)} <span className="text-gray-500">cities</span></h6>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div style={{ width: 540, height: 400, marginTop: 30, marginLeft: 33, marginBottom: 10 }}>
                        <img src={ImgHero} alt="Room" className="img-fluid position-absolute" style={{ margin: '-30px 0 0 -30px', zIndex: 1, width: 520 }} />
                        <img src={ImgHeroFrame} alt="Frame" className="img-fluid position-absolute" style={{ margin: '0 -15px -15px 0', width: 520 }} />
                    </div>
                </div>
            </div>
        </section>
    )
}
