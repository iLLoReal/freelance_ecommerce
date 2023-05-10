import { redirectScroll } from "../../../scripts/redirect";
import "./NavMenu.css";

export function NavMenu({ menuItems }) {
    return (
        <ul className="nav-menu">
            {menuItems.map((menuItem, id) => {
                return (
                    <div
                        key={'navItem/' + id}
                        onClick={() => redirectScroll('#' + menuItem.id)}
                        className="nav-item"
                    >
                        {menuItem.text}
                    </div>
                )
            })}
        </ul>
    )
}