import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";

import eom from "../../Assests/eom1.png";
import nationalPark from "../../Assests/nationalpark1.png";
import pokeBattle from "../../Assests/pokebattle1.jpg";

function Projects() {
    return (

        <Container fluid className='project-section'>
            <Container>
                <h1 className='project-heading'>
                    My Recent <strong className='purple'>Projects</strong>
                </h1>
                <p style={{ color: 'white' }}>
                    Here are a few projects I have worked on recently!
                </p>
                <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
                    <Col md={4} className='project-card'>
                        <ProjectCards
                            imgPath={eom}
                            title='Essence of Music'
                            description='Easily managable streaming service, based off the users preference of genre. "Liked" music will be added to the users Favorites Page, and saved to a playlist.'
                            link='https://github.com/Thurstoncox3/Essence_Of_Music'
                        />
                    </Col>
                    <Col md={4} className='project-card'>
                        <ProjectCards
                            imgPath={nationalPark}
                            title='National Park Roadtrip'
                            description='This web application allows you to create your own itinerary based on the national parks you would like to visit. Without logging in, you can visit the parks pages and see the weather, location, and activities connected to that specific park.'
                            link='https://github.com/AlexWilsonNC/national-roadtrip'
                        />
                    </Col>

                    <Col md={4} className='project-card'>
                        <ProjectCards
                            imgPath={pokeBattle}
                            title='PokeBattle Simulator'
                            description='The user will be able to battle the selected Pokemon based off the current location of the user. The Pokemon powers and attacks will be influenced by the weather that is occuring in the users current area.'
                            link='https://github.com/LilyWS/pokemon-battle'
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Projects; 