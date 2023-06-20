import { Container, Col, Row } from "react-bootstrap";
import {
    BsCloudCheckFill,
    BsFillPatchCheckFill,
    BsDatabaseCheck,
} from "react-icons/bs";
import { AiFillApi } from "react-icons/ai";
import { useColorMode } from "@chakra-ui/react";
import TrackVisibility from "react-on-screen";

export const Skills = () => {
    const { colorMode } = useColorMode();

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__fadeIn"
                                            : ""
                                    }
                                >
                                    <div className="skill-bx">
                                        <h2 className="header-content">
                                            Skills
                                        </h2>
                                    </div>
                                    <div className="experience_container">
                                        <div
                                            className={`experience_frontend ${
                                                colorMode === "dark"
                                                    ? "dark"
                                                    : "light"
                                            }`}
                                        >
                                            <div class="tools">
                                                <div class="circle">
                                                    <span class="red box"></span>
                                                </div>
                                                <div class="circle">
                                                    <span class="yellow box"></span>
                                                </div>
                                                <div class="circle">
                                                    <span class="green box"></span>
                                                </div>
                                            </div>

                                            <div className="development_header">
                                                <h3>Frontend Development</h3>
                                            </div>
                                            <div className="experience_content">
                                                <article className="experience_detail">
                                                    <BsFillPatchCheckFill />
                                                    <div>
                                                        <h4>HTML</h4>
                                                    </div>
                                                </article>
                                                <article className="experience_detail">
                                                    <BsFillPatchCheckFill />
                                                    <div>
                                                        <h4>CSS</h4>
                                                    </div>
                                                </article>
                                                <article className="experience_detail">
                                                    <BsFillPatchCheckFill />
                                                    <div>
                                                        <h4>JavaScript</h4>
                                                    </div>
                                                </article>
                                                <article className="experience_detail">
                                                    <BsFillPatchCheckFill />
                                                    <div>
                                                        <h4>React</h4>
                                                    </div>
                                                </article>
                                                <article className="experience_detail">
                                                    <BsFillPatchCheckFill />
                                                    <div>
                                                        <h4>Angular</h4>
                                                    </div>
                                                </article>
                                                <article className="experience_detail">
                                                    <BsFillPatchCheckFill />
                                                    <div>
                                                        <h4>TypeScript</h4>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>

                                        <div
                                            className={`experience_backend ${
                                                colorMode === "dark"
                                                    ? "dark"
                                                    : "light"
                                            }`}
                                        >
                                            <div class="tools">
                                                <div class="circle">
                                                    <span class="red box"></span>
                                                </div>
                                                <div class="circle">
                                                    <span class="yellow box"></span>
                                                </div>
                                                <div class="circle">
                                                    <span class="green box"></span>
                                                </div>
                                            </div>
                                            <div className="development_header">
                                                <h3>Backend Development</h3>
                                            </div>
                                            <div
                                                className="experience_content"
                                                style={{
                                                    color:
                                                        colorMode === "dark"
                                                            ? "#f0e7db"
                                                            : "#202023",
                                                }}
                                            >
                                                <article className="experience_detail">
                                                    <BsCloudCheckFill className="experience_detail-icon" />
                                                    <div>
                                                        <h4>Java</h4>
                                                    </div>
                                                </article>
                                                <article className="experience_detail">
                                                    <BsCloudCheckFill className="experience_detail-icon" />
                                                    <div>
                                                        <h4>Python</h4>
                                                    </div>
                                                </article>
                                                <article className="experience_detail">
                                                    <BsCloudCheckFill className="experience_detail-icon" />
                                                    <div>
                                                        <h4>C++</h4>
                                                    </div>
                                                </article>
                                                <article className="experience_detail">
                                                    <BsCloudCheckFill className="experience_detail-icon" />
                                                    <div>
                                                        <h4>C</h4>
                                                    </div>
                                                </article>
                                                <article className="experience_detail">
                                                    <AiFillApi className="experience_detail-icon" />
                                                    <div>
                                                        <h4>Node.js</h4>
                                                    </div>
                                                </article>
                                                <article className="experience_detail">
                                                    <AiFillApi className="experience_detail-icon" />
                                                    <div>
                                                        <h4>Flask</h4>
                                                    </div>
                                                </article>
                                                <article className="experience_detail">
                                                    <AiFillApi className="experience_detail-icon" />
                                                    <div>
                                                        <h4>FastAPI</h4>
                                                    </div>
                                                </article>
                                                <article className="experience_detail">
                                                    <BsDatabaseCheck className="experience_detail-icon" />
                                                    <div>
                                                        <h4>MySQL</h4>
                                                    </div>
                                                </article>
                                                <article className="experience_detail">
                                                    <BsDatabaseCheck className="experience_detail-icon" />
                                                    <div>
                                                        <h4>MongoDB</h4>
                                                    </div>
                                                </article>
                                                <article className="experience_detail">
                                                    <BsDatabaseCheck className="experience_detail-icon" />
                                                    <div>
                                                        <h4>PostgresSQL</h4>
                                                    </div>
                                                </article>
                                                <article className="experience_detail">
                                                    <BsDatabaseCheck className="experience_detail-icon" />
                                                    <div>
                                                        <h4>SQLite</h4>
                                                    </div>
                                                </article>
                                            </div>
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
