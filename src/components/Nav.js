import NavItem from "./NavItem";

function Nav(){
    return(
        <nav className="">
            <div className="flex gap-4">
                <NavItem to="/shop">Shop</NavItem>
                <NavItem to="/community">Community</NavItem>
                <NavItem to="/contact">Contact</NavItem>
            </div>
        </nav>
    )
}
export default Nav