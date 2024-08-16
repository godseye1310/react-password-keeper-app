import React from "react";
import Button from "../UI/Button";
import Search from "./Search";

const Header = () => {
	return (
		<div>
			<div>
				<h1>Passwork Keeper</h1>
				<h3>Total Password : 3</h3>
			</div>
			<Button>Add New Password</Button>
			<Search />
		</div>
	);
};

export default Header;
