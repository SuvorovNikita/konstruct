import photo1 from "../assets/img/photo-1.png"
import photo2 from "../assets/img/photo-2.png"
import photo3 from "../assets/img/photo-3.png"


const Story = () => {
    return (
        <>
            <section className="c-section c-section--base c-section--hero c-section--bg">
                <div className="c-section__body">
                    <div className="container">
                        <div className="c-section__header">
                            <h2 className="c-section__title">Our Story</h2>
                            <div className="c-section__line"></div>
                        </div>
                        <div className="c-section__inner">
                            <div className="c-section__content">
                                <h3 className="c-section__subtitle">Founded in 2011 by John Mathew
                                    Smith, <span>Konstruct</span> has
                                    become the number one construction management firm
                                </h3>
                                <p className="c-section__text">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                    elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut laoreet dolore magna aliquam erat.
                                </p>
                            </div>
                            <div className="c-section__photo">
                                <div className="c-section__img">
                                    <img className="c-section__item" src={photo1} alt="photo-1"/>
                                    <h3 className="c-section__name">We<br/>plan</h3>
                                </div>
                                <div className="c-section__img">
                                    <img className="c-section__item" src={photo2} alt="photo-2"/>
                                    <h3 className="c-section__name">We<br/>manage</h3>
                                </div>
                                <div className="c-section__img">
                                    <img className="c-section__item c-section__item--mp" src={photo3} alt="photo-3"/>
                                    <h3 className="c-section__name">We<br/>build</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Story;