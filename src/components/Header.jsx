import bg from "../assets/img/header-bg.png"
import logo from "../assets/img/logo.svg"

const Header = () => {
    return <>
        <header className="c-header" style={{backgroundImage: `url(${bg})`}}>
            <div className="container">
                <div className="c-header__logo">
                    <div className="c-header__link">
                        <a href="#">
                            <img src={logo} alt="logo"/>
                        </a>
                    </div>

                </div>
                <div className="c-header__title">
                    <h1 className="c-header__text">PARTNER WITH KONSTUCT</h1>
                    <p className="c-header__subtitle">An award-winning construction management firm</p>
                </div>
                <div className="c-header__actions">
                    <a className="c-header__scroll" href="#">SCROLL DOWN</a>
                </div>
            </div>
        </header>
    </>
}


export default Header;