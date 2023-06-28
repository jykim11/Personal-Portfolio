import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import resume from "../assets/kim_junyeong_resume.pdf";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useColorMode } from "@chakra-ui/react";
import my_img from "../assets/my_img.JPG";
import "../styles/Banner.css";

import "animate.css";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    // eslint-disable-next-line
    const [index, setIndex] = useState(1);
    const toRotate = [
        "Software Engineer",
        "Full Stack Developer",
        "Mobile App Developer",
    ];
    const period = 1000;

    const { colorMode } = useColorMode();

    const navigate = useNavigate();

    const handleSayHelloClick = () => {
        navigate("/contact");
    };

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
        // eslint-disable-next-line
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex((prevIndex) => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(150);
        } else {
            setIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__fadeIn"
                                            : ""
                                    }
                                >
                                    <span className="tagline">
                                        Welcome to my Portfolio
                                    </span>
                                    <div className="heading">
                                        <h1>{`Hi! I'm James.`} </h1>
                                    </div>
                                    <h2>
                                        <span
                                            className="txt-rotate"
                                            dataPeriod="1500"
                                            data-rotate='[ "Software Engineer", "Full Stack Web Developer"]'
                                        >
                                            <span className="wrap">{text}</span>
                                        </span>
                                    </h2>
                                    <p
                                        className="about_me_paragraph"
                                        style={{
                                            color:
                                                colorMode === "dark"
                                                    ? "#f0e7db"
                                                    : "#202023",
                                        }}
                                    >
                                        I am a Software Engineer specializing in
                                        full stack and mobile application
                                        development 🧑🏻‍💻. I strive for perfection
                                        to create user friendly, intuitive
                                        applications that are both visually
                                        appealing as well as functional for the
                                        end users needs.
                                    </p>
                                    <div className="cta">
                                        <button className="button_resume">
                                            <span class="resume">
                                                <a
                                                    href={resume}
                                                    target="_blank"
                                                    rel="noreferrer noopener"
                                                >
                                                    Resume
                                                </a>
                                            </span>
                                        </button>

                                        <ScrollLink
                                            to="contact"
                                            spy={true}
                                            smooth={true}
                                            offset={-50}
                                            duration={500}
                                            className="hello_button"
                                            activeClass="active"
                                            onClick={handleSayHelloClick}
                                        >
                                            <button className="hello_button">
                                                <div class="svg-wrapper-1">
                                                    <div class="svg-wrapper">
                                                        <svg
                                                            height="24"
                                                            width="24"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M0 0h24v24H0z"
                                                                fill="none"
                                                            ></path>
                                                            <path
                                                                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                                                fill="currentColor"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <span>Say Hello!</span>
                                            </button>
                                        </ScrollLink>
                                    </div>
                                    <div className="social-icon">
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
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__zoomIn"
                                            : ""
                                    }
                                >
                                    <img
                                        src={my_img}
                                        alt="Header Img"
                                        className="my_img"
                                    />
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
                <div class="scrolldown">
                    <div class="mouse">
                        <div class="mousedown"></div>
                        <div class="mousedown"></div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
