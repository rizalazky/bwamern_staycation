import React from 'react'
import Button from 'components/Button/index'

// import Icon/Image
import ImageHero from 'assets/images/img-hero.jpg'
import ImageFrame from 'assets/images/img-hero-frame.jpg'
import IconTravelers from 'assets/images/icons/icon-traveler.svg'
import IconCities from 'assets/images/icons/icon-cities.svg'
import IconTreasure from 'assets/images/icons/icon-treasure.svg'


import formatNumber from 'utils/formatNumber'

import Fade from 'react-reveal/Fade'


export default function Hero(props) {

    const showMostPick=()=>{
        window.scrollTo({
            top:props.refMostPicked.current.offsetTop -30,
            behavior:'smooth'
        })
    }
    return (
        <Fade bottom>
        <section className="container pt-4">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h1 className="font-weight-bold line-height-1 mb-3" >Forget Busy Work
                        <br></br>
                        Start Next Vacation
                    </h1>
                    <p className="font-weight-light mb-5 text-gray-500 w-75">We Provide what you need to enjoy your holiday with family.Time to make another memorable moments</p>
                    <Button hasShadow isPrimary onClick={showMostPick}>Show Me Now</Button>
                    <div className="row" style={{ marginTop:'80px'}}>
                        <div className="col-md-auto">
                            <img src={IconTravelers} alt="traveler"/>
                            <h6>{`${formatNumber(props.data.travelers)} `}<span className="font-weight-light text-gray-500">travelers</span></h6>
                        </div>
                        <div className="col-md-auto">
                            <img src={IconTreasure} alt="treasure"/>
                            <h6>{`${formatNumber(props.data.treasures)} `}<span className="font-weight-light text-gray-500">treasure</span></h6>
                        </div>
                        <div className="col-md-auto">
                            <img src={IconCities} alt="cities"/>
                            <h6>{`${formatNumber(props.data.cities)} `}<span className="font-weight-light text-gray-500">cities</span></h6>
                        </div>
 
                    </div>
                </div>
                <div className="col-md-6 pl-5" style={{ width:520,height:420 }}>
                    <img src={ImageHero} alt="Img Hero" style={{zIndex:1,margin:'-15px 0 0 -30px'}} className="img-fluid position-absolute"></img>
                    <img src={ImageFrame} alt="Img Frame" className="img-fluid position-absolute" style={{ margin:'30px -15px -15px 0'}}></img>
                </div>
            </div>
        </section>
        </Fade>
    )
}
