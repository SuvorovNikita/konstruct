import icon1 from "../../assets/img/icon-1.svg";
import icon2 from "../../assets/img/icon-2.svg";
import icon3 from "../../assets/img/icon-3.svg";

const Card = () => {
    return (
        <>
            <div className="c-card__inner">
                <div className="c-card__body c-card__body--mr-28">
                    <div className="c-card__image">
                        <img className="c-card__icon" src={icon1} alt="icon-1"/>
                    </div>
                    <h3 className="c-card__title">PROJECT AND CONSTRUCTION MANAGEMENT</h3>
                    <p className="c-card__text">Lorem ipsum dolor sit amet,<br/> consectetuer adipiscing
                        elit, sed diam <br/> nonummy nibh euismod tincidunt ut <br/> laoreet dolore magna aliquam
                        erat.
                    </p>
                </div>
                <div className="c-card__body c-card__body--mr-28">
                    <div className="c-card__image">
                        <img className="c-card__icon" src={icon2} alt="icon-1"/>
                    </div>
                    <h3 className="c-card__title">PROJECT AND CONSTRUCTION MANAGEMENT</h3>
                    <p className="c-card__text">Lorem ipsum dolor sit amet,<br/> consectetuer adipiscing
                        elit, sed diam <br/> nonummy nibh euismod tincidunt ut <br/> laoreet dolore magna aliquam
                        erat.
                    </p>
                </div>
                <div className="c-card__body">
                    <div className="c-card__image">
                        <img className="c-card__icon" src={icon3} alt="icon-1"/>
                    </div>
                    <h3 className="c-card__title">PROJECT AND CONSTRUCTION MANAGEMENT</h3>
                    <p className="c-card__text">Lorem ipsum dolor sit amet,<br/> consectetuer adipiscing
                        elit, sed diam <br/> nonummy nibh euismod tincidunt ut <br/> laoreet dolore magna aliquam
                        erat.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Card;