import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/users'>Users</NavLink>
			<NavLink to='/signup'>Sign Up</NavLink>
			<NavLink to='/'></NavLink>
			<NavLink to='/'></NavLink>
		</div>
	);
};

export default Header;