import React, { useContext } from "react";
import styles from "./Header.module.css";
import Button from "../UI/Button";
import Search from "./Search";
import globalContext from "../../store/global-context";

const Header = () => {
	const { total, formDisplayHandler } = useContext(globalContext);
	const showForm = () => {
		formDisplayHandler(true);
	};

	return (
		<div className={styles.header}>
			<div>
				<h1>Passwork Keeper</h1>
				<h3>Total Password : {total}</h3>
			</div>
			<Button onClick={showForm}>Add New Password</Button>
			<Search />
		</div>
	);
};

export default Header;
