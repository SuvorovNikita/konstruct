import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";
import Story from "./components/Story.jsx";
import Our from "./components/Our.jsx";
import Contact from "./components/Contact.jsx";
import Form from "./components/Form.jsx";

function App() {

    return (
        <main className="main">
            <Header/>
            <Navigation/>
            <Story/>
            <Our/>
            <Contact/>
            <Form/>
        </main>
    )
}

export default App
