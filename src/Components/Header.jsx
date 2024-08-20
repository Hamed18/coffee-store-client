import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div className="flex justify-around my-5 text-green-500">
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/users'>Users</NavLink>
			<NavLink to='/signup'>Sign Up</NavLink>
			<NavLink to='/signin'>Sign In</NavLink>
			<NavLink to='/'></NavLink>
		</div>
	);
};

export default Header;