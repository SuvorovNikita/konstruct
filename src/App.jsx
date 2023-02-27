import Header from "./components/Header.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import Story from "./components/Story.jsx";
import Our from "./components/Our.jsx";
import Contact from "./components/Contact.jsx";
import Form from "./components/Form.jsx";
import Footer from "./components/Footer.jsx";
import Made from "./components/Made.jsx";

function App() {

    return (<>
        <Header/>
        <main className="main">
            <Navigation/>
            <Story/>
            <Our/>
            <Contact/>
            <Form/>
        </main>
        <Footer/>
        <Made/>
    </>)
}

export default App
