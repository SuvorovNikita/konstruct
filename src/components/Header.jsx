import bg from "../assets/img/header-bg.png"
import logo from "../assets/img/logo.svg"
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
    return <>
        <header className="c-header" style={{backgroundImage: `url(${bg})`}}>
            <div className="container">
                <div className="c-header__logo">
                    <div className="c-header__link">
                        <Link href="#">
                            <img src={logo} alt="logo"/>
                        </Link>
                    </div>

                </div>
                <div className="c-header__title">
                    <h1 className="c-header__text">PARTNER WITH KONSTUCT</h1>
                    <p className="c-header__subtitle">An award-winning construction management firm</p>
                </div>
                <div className="c-header__actions">
                    <Link className="c-header__scroll" to="menu"  smooth={true}>SCROLL DOWN</Link>
                </div>
            </div>
        </header>
    </>
}


export default Header;