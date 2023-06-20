import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import contact_img from "../assets/contact_img.svg";

export const Contact = () => {
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    };
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({ succes: true, message: "Message sent successfully" });
        } else {
            setStatus({
                succes: false,
                message: "Something went wrong, please try again later.",
            });
        }
    };

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <img
                                    className={
                                        isVisible
                                            ? "animate__animated animate__zoomIn"
                                            : ""
                                    }
                                    src={contact_img}
                                    alt="Contact Us"
                                />
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__fadeIn"
                                            : ""
                                    }
                                >
                                    <h2>Get In Touch</h2>
                                    <form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col
                                                size={12}
                                                sm={6}
                                                className="px-1"
                                            >
                                                <div className="form__group field">
                                                    <input
                                                        type="input"
                                                        className="form__field"
                                                        value={
                                                            formDetails.firstName
                                                        }
                                                        placeholder="First Name"
                                                        required
                                                        onChange={(e) =>
                                                            onFormUpdate(
                                                                "firstName",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <label
                                                        for="name"
                                                        class="form__label"
                                                    >
                                                        First Name
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col
                                                size={12}
                                                sm={6}
                                                className="px-1"
                                            >
                                                <div className="form__group field">
                                                    <input
                                                        type="input"
                                                        className="form__field"
                                                        value={
                                                            formDetails.lastName
                                                        }
                                                        placeholder="Last Name"
                                                        required
                                                        onChange={(e) =>
                                                            onFormUpdate(
                                                                "lastName",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <label
                                                        for="name"
                                                        class="form__label"
                                                    >
                                                        Last Name
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col
                                                size={12}
                                                sm={6}
                                                className="px-1"
                                            >
                                                <div className="form__group field">
                                                    <input
                                                        type="email"
                                                        className="form__field"
                                                        value={
                                                            formDetails.email
                                                        }
                                                        placeholder="Email Address"
                                                        required
                                                        onChange={(e) =>
                                                            onFormUpdate(
                                                                "email",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <label
                                                        for="name"
                                                        class="form__label"
                                                    >
                                                        Email Address
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col
                                                size={12}
                                                sm={6}
                                                className="px-1"
                                            >
                                                <div className="form__group field">
                                                    <input
                                                        type="tel"
                                                        className="form__field"
                                                        value={
                                                            formDetails.phone
                                                        }
                                                        placeholder="Phone No."
                                                        onChange={(e) =>
                                                            onFormUpdate(
                                                                "phone",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <label
                                                        for="name"
                                                        class="form__label"
                                                    >
                                                        Phone No.
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col size={12} className="px-1">
                                                <div className="form__group field">
                                                    <textarea
                                                        rows="6"
                                                        className="form__field"
                                                        value={
                                                            formDetails.message
                                                        }
                                                        placeholder="Message"
                                                        required
                                                        onChange={(e) =>
                                                            onFormUpdate(
                                                                "message",
                                                                e.target.value
                                                            )
                                                        }
                                                    ></textarea>
                                                    <label
                                                        for="name"
                                                        class="form__label"
                                                    >
                                                        Message
                                                    </label>
                                                </div>
                                                <button type="submit">
                                                    <span>{buttonText}</span>
                                                </button>
                                            </Col>
                                            {status.message && (
                                                <Col>
                                                    <p
                                                        className={
                                                            status.success ===
                                                            false
                                                                ? "danger"
                                                                : "success"
                                                        }
                                                    >
                                                        {status.message}
                                                    </p>
                                                </Col>
                                            )}
                                        </Row>
                                    </form>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
