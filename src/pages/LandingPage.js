import React, { Component } from 'react'

import Header from 'parts/Header'
import Hero from 'parts/Hero'
import MostPicked from 'parts/MostPicked'
import Categories from 'parts/Categories'
import Testimony from 'parts/Testimony'

import Data from 'json/landingPage.json'
import Footer from 'parts/Footer'

export default class LandingPage extends Component {
    constructor(props){
        super(props);
        this.refMostPicked=React.createRef()
    }

    render() {
        return (
            <>
              <Header {...this.props}></Header>  
              <Hero refMostPicked={this.refMostPicked} data={Data.hero}/>
              <MostPicked refMostPicked={this.refMostPicked} data={Data.mostPicked}/>
              <Categories data={Data.categories}/>
              <Testimony data={Data.testimonial}/>
              <Footer/>
            </>
        )
    }
}
