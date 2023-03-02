import icon1 from "../../assets/img/icon-1.svg";
import icon2 from "../../assets/img/icon-2.svg";
import icon3 from "../../assets/img/icon-3.svg";

const Card = () => {

    const card = [
        {
            id: "1",
            url: icon1,
            alt: "icon-1.svg",
            title: "Project and construction management",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat."
        },
        {
            id: "2",
            url: icon2,
            alt: "icon-2.svg",
            title: "Structure audit and maintenance",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat."
        },
        {
            id: "3",
            url: icon3,
            alt: "icon-3.svg",
            title: "Factory construction and modeling",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat."
        },
    ];

    return (
        <>
            <div className="c-card c-card--base">
                <div className="c-card__inner">
                    {card.map(el => <div key={el.id} className="c-card__body c-card__body--mr-28">
                        <div className="c-card__image">
                            <img className="c-card__icon" src={el.url} alt={el.alt}/>
                        </div>
                        <h3 className="c-card__title">{el.title}</h3>
                        <p className="c-card__text">{el.text}</p>
                    </div>)}
                </div>
            </div>
        </>
    )
}

export default Card;