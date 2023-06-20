import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useColorMode } from "@chakra-ui/react";
import nonogram from "../assets/nonogram.png";

export const Projects = () => {
    const { colorMode } = useColorMode();

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__fadeIn"
                                            : ""
                                    }
                                >
                                    <h2 className="header-content">Projects</h2>
                                    <div className="project_container">
                                        <div className="project_description_container">
                                            <h1>Nonograms</h1>
                                            <ul className="project_list">
                                                <li>Java</li>
                                                <li>
                                                    Model-View-Controller (MVC)
                                                </li>
                                                <li>Maven</li>
                                                <li>JavaFX</li>
                                            </ul>
                                            <div
                                                className={`project_button ${
                                                    colorMode === "dark"
                                                        ? "dark"
                                                        : "light"
                                                }`}
                                            >
                                                <a
                                                    class="fancy"
                                                    href="https://github.com/jykim11/Nonograms"
                                                    target="_blank"
                                                    rel="noreferrer noopener"
                                                >
                                                    <span class="top-key"></span>
                                                    <span class="text">
                                                        Github
                                                    </span>
                                                    <span class="bottom-key-1"></span>
                                                    <span class="bottom-key-2"></span>
                                                </a>
                                                <a class="fancy" href="">
                                                    <span class="top-key"></span>
                                                    <span class="text">
                                                        Live Demo
                                                    </span>
                                                    <span class="bottom-key-1"></span>
                                                    <span class="bottom-key-2"></span>
                                                </a>
                                            </div>
                                            <p className="project_description">
                                                Utilized model-view-controller
                                                (MVC) design pattern together
                                                with the JavaFX User Interface
                                                (UI) library to design a
                                                complete, functioning Graphical
                                                User Interface (GUI)
                                                implementation of the
                                                single-player logic puzzle
                                                nonograms. Maven, a build
                                                automation tool for Java, was
                                                used as a build manager where
                                                JavaFX was added as a Maven
                                                dependency to the POM file.
                                            </p>
                                        </div>
                                        <div className="project_image_container">
                                            <img src={nonogram} alt="project" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
