import React from 'react'
import Navbar from '../components/Navbar'
import Hero_section from '../components/Hero_section'
import Cards from '../components/Card'
import Mainbody from '../components/Mainbody'
import Endtoend from '../components/Endtoend'
import Footer from '../components/Footer'
function Home() {
    return (
        <div>
           <Navbar/>
           <Hero_section/>
           <Cards/>
           <Mainbody/>
           <Endtoend/>
           <Footer/>
        </div>
    )
}

export default Home