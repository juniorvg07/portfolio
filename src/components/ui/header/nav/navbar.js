import { SidebarData } from "../sidebar/sidebarData";
import { Link } from "react-scroll";

export const Navbar = ({navClass}) => {
    return (
        <div className={navClass} id="navbar">
            <nav className="navbar">
                <ul className="navbar-list">
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link smooth={true} to={item.link} className={item.nameClass} >{item.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    );
}