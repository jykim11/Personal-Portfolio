import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "../src/libs/theme";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Router>
                <div className="App">
                    <NavBar />
                    <Banner />
                    <Skills />
                    <Projects />
                    <Contact />
                    <Footer />
                </div>
            </Router>
        </ChakraProvider>
    );
}

export default App;
