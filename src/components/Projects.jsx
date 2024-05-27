import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useColorMode } from "@chakra-ui/react";
import nonogram from "../assets/nonogram.png";
import todo from "../assets/todo.png";
import techonestop from "../assets/techonestop.png";
import "../styles/Projects.css";

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
												<li>Model-View-Controller (MVC)</li>
												<li>Maven</li>
												<li>JavaFX</li>
											</ul>
											<div
												className={`project_button ${
													colorMode === "dark" ? "dark" : "light"
												}`}
											>
												<a
													class="fancy"
													href="https://github.com/jykim11/Nonograms"
													target="_blank"
													rel="noreferrer noopener"
												>
													<span class="top-key"></span>
													<span class="text">Github</span>
													<span class="bottom-key-1"></span>
													<span class="bottom-key-2"></span>
												</a>
											</div>
											<p className="project_description">
												Utilized model-view-controller (MVC) design
												pattern together with the JavaFX User
												Interface (UI) library to design a complete,
												functioning Graphical User Interface (GUI)
												implementation of the single-player logic
												puzzle nonograms. Maven, a build automation
												tool for Java, was used as a build manager
												where JavaFX was added as a Maven dependency
												to the POM file.
											</p>
										</div>
										<div className="project_image_container_nono">
											<img src={nonogram} alt="project" />
										</div>

										{/* 2nd project */}
										<div className="project_description_container">
											<h1>Tech One Stop</h1>

											<div
												className={`project_button ${
													colorMode === "dark" ? "dark" : "light"
												}`}
											>
												<a
													class="fancy"
													href="https://tech-onestop.com/"
													target="_blank"
													rel="noreferrer noopener"
												>
													<span class="top-key"></span>
													<span class="text">Live Demo</span>
													<span class="bottom-key-1"></span>
													<span class="bottom-key-2"></span>
												</a>
											</div>
											<p className="project_description">
												Comprehensive and user-friendly tech
												one-stop website that serves as a hub for
												all things technology-related. The dynamic
												website uses a combination of HTML, CSS, and
												JavaScript to ensure a visually appealing
												and interactive user interface. Not related
												for a specific business.
											</p>
										</div>
										<div className="project_image_container_tech">
											<img src={techonestop} alt="project" />
										</div>

										{/* 3rd project */}
										<div className="project_description_container">
											<h1>To-Do Application</h1>

											<ul className="project_list">
												<li>JavaScript (EJS)</li>
												<li>Node.js</li>
												<li>MongoDB</li>
											</ul>

											<div
												className={`project_button ${
													colorMode === "dark" ? "dark" : "light"
												}`}
											>
												<a
													class="fancy"
													href="https://web-production-8da1c.up.railway.app/"
													target="_blank"
													rel="noreferrer noopener"
												>
													<span class="top-key"></span>
													<span class="text">Live Demo</span>
													<span class="bottom-key-1"></span>
													<span class="bottom-key-2"></span>
												</a>
											</div>
											<p className="project_description">
												Developed a user-friendly To-do list
												application using JavaScript, EJS for the
												templating engine, Node.js for the backend,
												and MongoDB as the database. Application
												allows users to efficiently organize their
												tasks and manage their schedules
												effortlessly. By leveraging the power of
												Node.js and MongoDB, the application
												provides seamless data storage and
												retrieval, ensuring that users' to-do lists
												are securely stored and easily accessible.
											</p>
										</div>
										<div className="project_image_container_todo">
											<img src={todo} alt="project" />
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
