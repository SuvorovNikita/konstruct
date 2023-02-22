import icon1 from "../assets/img/icon-1.svg"
import icon2 from "../assets/img/icon-2.svg"
import icon3 from "../assets/img/icon-3.svg"
import Card from "./Card/Card.jsx";

const Our = () => {
    return (
        <>
            <section className="c-section c-section--base c-section--bg">
                <div className="container">
                    <div className="c-section__inner">
                        <div className="c-section__content">
                            <div className="c-section__header">
                                <h2 className="c-section__title">Our capabilities</h2>
                                <div className="c-section__line c-section__line--left"></div>
                            </div>
                        </div>
                        <div className="c-section__context">
                            <p className="c-section__text-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                sed diam nonummy nibh euismod
                                tincidunt ut laoreet dolore magna aliquam erat.</p>
                        </div>
                        <div className="c-section__actions">
                            <a className="c-button c-button--base" href="">All services</a>
                        </div>
                    </div>
                    <div className="c-card c-card--base">
                        <Card/>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Our;