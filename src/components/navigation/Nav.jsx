import { Link, animateScroll as scroll } from "react-scroll";

const Nav = () => {

    const menu = [
        {id: "1", link: "#", name: "Home"},
        {id: "2", link: "#", name: "About"},
        {id: "3", link: "#", name: "Services"},
        {id: "4", link: "#", name: "Work"},
        {id: "5", link: "#", name: "Contact"}]

    return (
        <>
            <nav className="c-menu__navigation">
                {menu.map(el => <div key={el.id} className="c-menu__item">
                    <Link
                        to={el.link}
                        id={el.id} className="c-menu__link">
                        {el.name}
                    </Link>
                </div>)}
            </nav>
        </>
    )
}

export default Nav;