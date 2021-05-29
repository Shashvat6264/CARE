import React from 'react'
import {Button, Container, Row, Col, Image} from 'react-bootstrap'
import left from "./left.png"
import right from "./right.png"
import './About.css'

function About() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Image className = "images" src={left}/>
                    </Col>
                    <Col>
                        <div id="login-box">
                            <div class="left">
                                <h1>Sign up</h1>
                                
                                <input type="text" name="username" placeholder="Username" />
                                <input type="text" name="email" placeholder="E-mail" />
                                <input type="password" name="password" placeholder="Password" />
                                <input type="password" name="password2" placeholder="Retype password" />
                                
                                <input type="submit" name="signup_submit" value="Sign me up" />
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <Image className = "Images" src={right} />
                    </Col>
                </Row>
            </Container>
           
  
  {/* <div class="right">
    <span class="loginwith">Sign in with<br />social network</span>
    
    <button class="social-signin facebook">Log in with facebook</button>
    <button class="social-signin twitter">Log in with Twitter</button>
    <button class="social-signin google">Log in with Google+</button>
  </div>
  <div class="or">OR</div> */}

        </div>
    )
}

export default About
