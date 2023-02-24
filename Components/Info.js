import React from 'react'



function Info() {
    
    return(
        <section className="info-section">
            
            <h1 className="center-text user-name">Spencer Pingitore</h1>
            <h3 className="center-text user-title">Full Stack Developer</h3>
            <p className="center-text user-website"><a className="website-link" href="https://find.cool" target="_blank">find.cool</a></p>
            
            <div className="btn-container">
            
                <a className="btn btn-email" href="mailto:silentfoe9@gmail.com">
                <img className="small-icon-email" src="../Images/mailsmall.png"/>Email
                </a>
                
                
                <a className="btn btn-linkedin" href="https://www.linkedin.com/in/spencerpingitore/" target="_blank">
                <img className="small-icon-linkedin" src="../Images/linkedinsmall.png"/>
                LinkedIn
                </a>
            </div>
        
        </section>
    )
}



export default Info