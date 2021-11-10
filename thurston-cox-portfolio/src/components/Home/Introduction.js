import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assests/bitmoji.png";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2(){
    return (
        <Container fluid className='home-about-section' id='about'>
            <Container>
                <Row>
                    <Col md={8} className='home-about-description'>
                        <h1 style={{ fontSize:'2.6em' }}>LET ME<span className='purple'>INTRODUCE</span>MYSELF</h1>
                        <p className='home-about-body'>
                            Although my time programming is relatively short, I have fallen in love with it, due to the constant need for adabptabilty.
                            <br />
                            I love to learn, and to implement what I have learned into a new project. As of now, I am fluent in <b className='purple'>Javascript</b>. However, I am currently studying <b className='purple'>Python and C++</b> , and plan to be just as confident in these languages as well. 
                            <br />
                            <br />
                            Whenever possible, I also apply my passion for developing product with <b className='purple'>Node.js</b> and <b className='purple'>Javascript Libraries and Frameworks</b> like <b className='purple'>React.js</b>.
                        </p>
                    </Col>
                    <Col md={4} className='myAvatar'>
                        <Tilt>
                            <img src={myImg} className='img-fluid' alt='avatar' />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className='home-about-social'>
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to reach out and <span className='purple'>connect </span> with me!
                        </p>
                        <ul className='home-about-social-links'>
                            <li className='social-icons'>
                                <a href='https://github.com/Thurstoncox3' 
                                target='_blank' 
                                rel='noreferrer' className='icon-color home-social-icons'
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className='social-icons'>
                                <a href='https://www.instagram.com/thurstcx/' 
                                target='_blank' 
                                rel='noreferrer' className='icon-color home-social-icons'
                                >
                                    <AiFillInstagram />
                                </a>
                            </li>
                            <li className='social-icons'>
                                <a href='https://www.linkedin.com/in/thurstoncox3/' 
                                target='_blank' 
                                rel='noreferrer' className='icon-color home-social-icons'
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Home2;