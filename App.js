import React from 'react'
import About from './Components/About'
import Footer from './Components/Footer'
import Info from './Components/Info'
import Interests from './Components/Interests'
import Headshot from './Components/Headshot'

function App() {
    return (
        <main className="main-container">
            <div className="inner-container">
                <Headshot />
                <div className="text-content-container">
                    <Info />
                    <div className="about-interest-container">
                        <About />
                        <Interests />
                    </div>
                </div>
                <Footer />
            </div>
        </main>
    )
}

export default App