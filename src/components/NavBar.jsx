import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import ThemeToggleButton from "./Theme-toggle-button";
import "../styles/NavBar.css";

import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    const navigate = useNavigate();

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 80) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
            setScrollPosition(window.scrollY);
        };

        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Get the positions of the sections
            const homeSectionPos = document.getElementById("home").offsetTop;
            const skillsSectionPos =
                document.getElementById("skills").offsetTop;
            const projectSectionPos =
                document.getElementById("project").offsetTop;
            const contactSectionPos =
                document.getElementById("contact").offsetTop;

            // Determine which section is in the viewport based on the scroll position
            if (
                scrollY >= homeSectionPos &&
                scrollY < skillsSectionPos - 50 // Adjust offset to prevent overlapping sections
            ) {
                setActiveLink("home");
                navigate("/", { replace: true }); // Update URL to "/"
            } else if (
                scrollY >= skillsSectionPos - 50 &&
                scrollY < projectSectionPos - 50
            ) {
                setActiveLink("skills");
                navigate("/skills", { replace: true }); // Update URL to "/skills"
            } else if (
                scrollY >= projectSectionPos - 50 &&
                scrollY < contactSectionPos - 50
            ) {
                setActiveLink("project");
                navigate("/project", { replace: true }); // Update URL to "/project"
            } else if (scrollY >= contactSectionPos - 50) {
                setActiveLink("contact");
                navigate("/contact", { replace: true }); // Update URL to "/contact"
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("scroll", onScroll);
        };
        // eslint-disable-next-line
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    <img
                        class="nav-logo"
                        className={`nav-logo ${
                            scrollPosition > 80 ? "scrolled" : ""
                        }`}
                        src={logo}
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            as={Link}
                            to="home"
                            spy={true}
                            offset={-50}
                            className={
                                activeLink === "home"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => onUpdateActiveLink("home")}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="skills"
                            spy={true}
                            offset={-50}
                            className={
                                activeLink === "skills"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => {
                                onUpdateActiveLink("skills");
                            }}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="project"
                            offset={-50}
                            className={
                                activeLink === "project"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => {
                                onUpdateActiveLink("project");
                            }}
                        >
                            Projects
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="contact"
                            spy={true}
                            offset={-50}
                            className={
                                activeLink === "contact"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => {
                                onUpdateActiveLink("contact");
                            }}
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                    <ThemeToggleButton />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
