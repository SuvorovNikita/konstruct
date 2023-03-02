import {NavLink} from "react-router-dom";
const Nav = () => {

    const menu = [

        {id: "1", link: "/home", name: "Home"},
        {id: "2", link: "/", name: "About"},
        {id: "3", link: "/services", name: "Services"},
        {id: "4", link: "/work", name: "Work"},
        {id: "5", link: "/contact", name: "Contact"}]

    return (
        <>
            <nav className="c-menu__navigation">
                {menu.map(el => <div key={el.id} className="c-menu__item">
                    <NavLink
                        className={({isActive}) =>
                            (isActive ? "c-menu__link" : "c-menu__not-active")}
                        to={el.link}
                        id={el.id}>
                        {el.name}
                    </NavLink>
                </div>)}
            </nav>
        </>
    )
}

export default Nav;