import logo from "../../assets/img/logo-menu.svg"
import Nav from "./Nav.jsx";

const Navigation = () => {
    return (
        <>
            <section id="menu" className="c-menu">
                <div className="container">
                    <div className="c-menu__inner">
                        <div className="c-menu__logo">
                            <img src={logo} alt="logo-menu"/>
                        </div>
                        <Nav/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navigation;