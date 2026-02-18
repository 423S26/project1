import NavItem from "./NavItem";

function Nav(){
    return(
        <nav className="">
            <div className="flex justify-end gap-4 px-8 py-4">
                <NavItem to="/">Home</NavItem>
                <NavItem to="/shop">Shop</NavItem>
                <NavItem to="/community">Community</NavItem>
                <NavItem to="/contact">Contact</NavItem>
                <NavItem to="/signup">SignUp</NavItem>
                <NavItem to="/signin">SignIn</NavItem>
            </div>
        </nav>
    )
}
export default Nav