import React from 'react'
import Land from './Land'
import Button from 'react-bootstrap/Button'
import "./styles.css";
function Hero() {
    return (
        <div>
            
            <div className="content">
            <Land />
                <div className="desc">
                    Do you want a child to get adopted and not fall trap to unfair means?
                    <br></br>
                    If so then do register the child
                    <br>
                    </br>
                    <Button variant="warning">Register a Child</Button>
                </div>
                <br></br>
            
            </div>
        </div>
    )
}

export default Hero
