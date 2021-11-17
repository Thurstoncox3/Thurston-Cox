import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
// import Resumecontent from "./ResumeContent";
// import axios from "axios";
import pdf from "../../Assests/Thurston Cox Resume (1).pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume(){
    return (
        <Container fluid className="resume-section">
            <Container>
                <Row style={{ justifyContent: 'center', position: 'relative' }}>
                    <Button variant='primary' href={pdf} target='_blank'>
                        <AiOutlineDownload />
                        &nbsp; Download CV
                    </Button>
                </Row>
            </Container>
        </Container>
    )
}

export default Resume;