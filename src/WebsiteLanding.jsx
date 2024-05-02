import React from 'react'
import Hero from './LandingPages/Hero'
import Header from './ExtraPages/Header'
import SubHeader from './ExtraPages/SubHeader'
import Portfolio from './LandingPages/Portfolio'
import Portfolio2 from './LandingPages/Portfolio2'
import Gallery from './LandingPages/Gallery'
import Sliders from './LandingPages/Slider'
import Footer from './ExtraPages/Footer'
import Header3 from './ExtraPages/Header3'
import Gallery2 from './LandingPages/Gallery2'
// bg-[url("./public/bghero.jpg")]
function WebsiteLanding() {
    return (
        <>
            <div className=' w-screen h-screen bg-[url("/bghero.jpg")] overflow-y-scroll overflow-x-hidden bg-cover bg-center bg-no-repeat'>


                {/* <SubHeader></SubHeader> */}
                {/* <Header></Header> */}
                <Header3></Header3>
                {/* <Hero></Hero> */}
                <div className='h-[450px] w-screen relative overflow-hidden'>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-75"></div>
                    <div className="flex flex-col justify-center items-center h-full relative z-10">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white text-center mb-4 animate-fade-in">Welcome to <span className="text-gold">Dancing Leaf</span></h1>
                        <p className="text-lg sm:text-xl text-gray-300 mt-4 text-center animate-fade-in">Where Every Event Blossoms</p>
                    </div>
                </div>
                
                <Portfolio></Portfolio>
                <Sliders></Sliders>
                {/* <Gallery2></Gallery2> */}
                <Portfolio2></Portfolio2>

                <Gallery></Gallery>
                <Footer></Footer>
                
            </div>

        </>
    )
}

export default WebsiteLanding