import React, { useContext } from "react";
import styles from "./passwordList.module.css";
import PaswordItem from "./PaswordItem";
import Card from "../UI/Card";
import globalContext from "../../store/global-context";

const PasswordList = (props) => {
	const listCtx = useContext(globalContext);
	// console.log(listCtx.passwords);
	// console.log(listCtx.filteredList);

	const deleteHandler = (id) => {
		listCtx.deletePassword(id);
	};

	const editHandler = (edit) => {
		listCtx.editPassword(edit);
		props.onShowForm();
	};

	const listData = listCtx.passwordList.map((data) => {
		return (
			<PaswordItem
				key={data.id}
				id={data.id}
				title={data.title}
				password={data.password}
				onDelete={deleteHandler}
				onEdit={editHandler.bind(null, data)}
			/>
		);
	});
	return (
		<Card className={styles.card}>
			<ul>{listData}</ul>
		</Card>
	);
};

export default PasswordList;
