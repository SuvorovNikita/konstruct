import logo from "../assets/img/logo-menu.svg"

const Navigation = () => {
    return (
        <>
            <section className="c-menu">
                <div className="container">
                    <div className="c-menu__inner">
                        <div className="c-menu__logo">
                            <img src={logo} alt="logo-menu"/>
                        </div>
                        <nav className="c-menu__navigation">
                            <div className="c-menu__item">
                                <a href="#" className="c-menu__link">Home</a>
                            </div>
                            <div className="c-menu__item">
                                <a href="#" className="c-menu__link">About</a>
                            </div>
                            <div className="c-menu__item">
                                <a href="#" className="c-menu__link">Services</a>
                            </div>
                            <div className="c-menu__item">
                                <a href="#" className="c-menu__link">Work</a>
                            </div>
                            <div className="c-menu__item">
                                <a href="#" className="c-menu__link">Contact</a>
                            </div>
                        </nav>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navigation;