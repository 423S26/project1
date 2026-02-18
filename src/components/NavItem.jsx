import { NavLink } from "react-router-dom"

function NavItem({ to, children }) {
    const base =
        "px-4 py-2 rounded-lg font-medium transition-colors duration-200"

    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `${base} ${
                    isActive
                        ? "bg-[#FFB7C5]"
                        : "hover:bg-[#FFB7C5]"
                }`
            }
        >
            {children}
        </NavLink>
    )
}
export default NavItem


