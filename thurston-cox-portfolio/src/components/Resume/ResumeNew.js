import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assests/emoji2.PNG";
import Tilt from "react-parallax-tilt";
import Button from "react-bootstrap/Button";
import pdf from "../../Assests/Thurston-Cox-Resume-(1).pdf";
import { AiOutlineDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";


function ResumeNew() {
    return (
        <div>
            <Container fluid className='resume-section'>
                <Row style={{ justifyContent: 'center', position: 'relative' }}>
                    <Button variant='primary' href={pdf} target='_blank'>
                        <AiOutlineDownload />
                        &nbsp;View Resume
                    </Button>
                    <Col md={4} className='myAvatar'>
                        <Tilt>
                            <img src={myImg} className='img-fluid' alt='avatar' />
                        </Tilt>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ResumeNew;