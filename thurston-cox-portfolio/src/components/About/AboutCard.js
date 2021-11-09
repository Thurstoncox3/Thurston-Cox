import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className='quote-card-view'>
            <Card.Body>
                <blockquote className='blockquote mb-0'>
                    <p style={{ textAlign: 'justify' }}>
                        Hi, I am <span className='purple'>Thurston Cox from</span> from <span className='purple'> Raleigh, NC.</span>
                        <br /> I am a Full Stack Web Developer, with backgrounds in FinTech and Healthcare sales.
                        <br /> Apart from coding, some other activities that I love to participate in are:
                    </p>
                    <ul>
                        <li className='about-activities'>
                            <ImPointRight /> Playing Basketball
                        </li>
                        <li className='about-activities'>
                            <ImPointRight /> Traveling as much as possible
                        </li>
                        <li className='about-activities'>
                            <ImPointRight /> Attending concerts
                        </li>
                    </ul>

                    <p style ={{ 
                        marginBlockEnd: 0,
                        color: 'rgb(155 126 172)'
                    }}>"Building new things with creativity and user functionality!""{" "}</p>
                    <footer className='blockquote-footer'>Thurston</footer>
                </blockquote>
            </Card.Body>
        </Card>
    )
}

export default AboutCard;