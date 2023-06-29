const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

const port = process.env.PORT || 5000;

const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "junyeongkim1@gmail.com",
        pass: "srjhjjzqolmyfucw",
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

router.post("/contact", (req, res) => {
    const name = req.body.firstName + " " + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from: name,
        to: "junyeongkim1@gmail.com",
        subject: "Contact Form Submission - Portfolio",
        html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error);
        } else {
            res.json({ code: 200, status: "Message Sent" });
        }
    });
});

if (process.env.NODE_ENV === "production") {
    // Exprees will serve up production assets
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(
            path.resolve(
                __dirname,
                "personal-portfolio",
                "public",
                "index.html"
            )
        );
    });
}

app.listen(port, () => console.log("Server Running"));
