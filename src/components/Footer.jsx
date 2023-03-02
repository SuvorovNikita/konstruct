import logo from '../assets/img/logo-footer.svg'
import icon1 from '../assets/img/facebook.svg'
import icon2 from '../assets/img/twitter.svg'
import icon3 from '../assets/img/google.svg'


const Footer = () => {
    return (
        <>
            <footer className="c-footer">
                <div className="c-footer__body">
                    <div className="container">
                        <div className="c-footer__inner">
                            <div className="c-footer__company">
                                <div className="c-footer__title">Company</div>
                                <div className="c-footer__logo">
                                    <img src={logo} alt="logo-footer"/>
                                </div>
                                <p className="c-footer__subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                    elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
                                </p>
                            </div>
                            <div className="c-footer__about">
                                <div className="c-footer__title">Links</div>
                                <nav className="c-footer__menu">
                                    <div className="c-footer__item">
                                        <a href="#" className="c-footer__link">Home</a>
                                    </div>
                                    <div className="c-footer__item">
                                        <a href="#" className="c-footer__link">About</a>
                                    </div>
                                    <div className="c-footer__item">
                                        <a href="#" className="c-footer__link">Services</a>
                                    </div>
                                    <div className="c-footer__item">
                                        <a href="#" className="c-footer__link">Project</a>
                                    </div>
                                    <div className="c-footer__item">
                                        <a href="#" className="c-footer__link">Contact Us</a>
                                    </div>
                                </nav>
                            </div>
                            <div className="c-footer__faq">
                                <nav className="c-footer__menu">
                                    <div className="c-footer__item">
                                        <a href="#" className="c-footer__link">Faq</a>
                                    </div>
                                    <div className="c-footer__item">
                                        <a href="#" className="c-footer__link">Terms</a>
                                    </div>
                                    <div className="c-footer__item">
                                        <a href="#" className="c-footer__link">Careers</a>
                                    </div>
                                </nav>
                            </div>
                            <div className="c-footer__blog">
                                <nav className="c-footer__menu">
                                    <div className="c-footer__item">
                                        <a href="#" className="c-footer__link">Blog</a>
                                    </div>
                                    <div className="c-footer__item">
                                        <a href="#" className="c-footer__link">Partners</a>
                                    </div>
                                    <div className="c-footer__item">
                                        <a href="#" className="c-footer__link">News</a>
                                    </div>
                                </nav>
                            </div>
                            <div className="c-footer__contact">
                                <div className="c-footer__title">Contact Us</div>
                                <address className="c-footer__address">
                                    <p className="c-footer__text">213 Baker Street Oriel City Kounty 7000 KNW,
                                        Kountry Name</p>
                                    <a className="c-footer__phone" href="tel:+239942334022">+23 994 233 4022</a><br/><br/>
                                    <a className="c-footer__email"
                                       href="mailto:info@konstruct.com">info@konstruct.com</a>
                                </address>
                            </div>
                            <div className="c-footer__social">
                                <nav className="c-footer__social-menu">
                                    <div className="c-footer__social-item">
                                        <a href="#" className="c-footer__link">
                                            <img src={icon1} alt="facebook"/>
                                        </a>
                                    </div>
                                    <div className="c-footer__social-item">
                                        <a href="#" className="c-footer__link">
                                            <img src={icon2} alt="twitter"/>
                                        </a>
                                    </div>
                                    <div className="c-footer__social-item">
                                        <a href="#" className="c-footer__link">
                                            <img src={icon3} alt="google"/>
                                        </a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;