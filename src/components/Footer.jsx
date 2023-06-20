import { Container, Row, Col } from "react-bootstrap";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import logo from "../assets/logo.png";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" className="footer-logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon footer-icon">
                            <a
                                href="https://www.linkedin.com/in/junyeongkim/"
                                className="social-link"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <BsLinkedin />
                            </a>
                            <a
                                href="https://github.com/jykim11"
                                className="social-link"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <BsGithub />
                            </a>
                        </div>
                        <p>Copyright 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
