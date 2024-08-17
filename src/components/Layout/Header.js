import React, { useContext } from "react";
import styles from "./Header.module.css";
import Button from "../UI/Button";
import Search from "./Search";
import globalContext from "../../store/global-context";

const Header = (props) => {
	const { total } = useContext(globalContext);

	return (
		<div className={styles.header}>
			<div>
				<h1>Passwork Keeper</h1>
				<h3>Total Password : {total}</h3>
			</div>
			<Button onClick={props.onDisplayForm}>Add New Password</Button>
			<Search />
		</div>
	);
};

export default Header;
