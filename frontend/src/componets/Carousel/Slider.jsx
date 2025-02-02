import { Carousel, Col, Container, Row } from "react-bootstrap";
import './slider.css';

function Slider() {
    return (
        <Container>
            <Row>
                <Col>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="slider-img"
                                src="sliderImage1.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="slider-img"
                                src="sliderImag2.jpg"
                                alt="second slide"
                            />
                            <Carousel.Caption>
                                <h5>Second slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="slider-img"
                                src="sliderImage3.jpg"
                                alt="third slide"
                            />
                            <Carousel.Caption>
                                <h5>Third... slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}
export default Slider;