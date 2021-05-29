import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './About.css'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import left from "./img/left.png";

function About() {
    return (
        <div>
            <Container style={{width: "80%"}} fluid={true}>
                <Row>
                    <Col>
                        <ParallaxProvider>
                            <Parallax y={[-40, 10]} tagOuter="figure">
                                <Image className="leftp-img" src={left} />
                            </Parallax>
                        </ParallaxProvider>
                    </Col>
                    <Col>
                        <div className="about-box">
                            <h2>Our Purpose</h2>
                            <p>
                                While there is a rise in covid cases, there is a new hitch wherein many 
                                children have lost both of their parents and are trafficked and smuggled 
                                to work as a child labour. In order to stop the misuse of child adoption,
                                we will build a dapp in order to prevent the future of children and not 
                                let them fall into traps. Also over many years, we have encountered child 
                                abandonment in the news which is a real-life global issue that needs to 
                                be addressed.  
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div style={{marginTop: "7rem"}} className="about-box">
                            <h2>Use Cases of the application</h2>
                            <p>
                                The human actors include Reporter and Parent where both are inheriting 
                                use-case of Guardian entity. Here the Organisation actor represents adoption 
                                agencies or foster homes where the child will be taken good care. Printer and 
                                SysAdmin are system actors and in our case the printer is the frontend of 
                                application while SysAdmin is a representation of logic features implemented 
                                using blockchain. The application will be further extended to support 
                                crowdfunding for organisations using blockchain.
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <ParallaxProvider>
                            <Parallax y={[-20, 20]} tagOuter="figure">
                                <Image className="leftp-img" src={left} />
                            </Parallax>
                        </ParallaxProvider>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About
