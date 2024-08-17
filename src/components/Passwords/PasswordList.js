import React, { useContext, useEffect } from "react";
import styles from "./passwordList.module.css";
import PaswordItem from "./PaswordItem";
import Card from "../UI/Card";
import globalContext from "../../store/global-context";

const PasswordList = (props) => {
	const listCtx = useContext(globalContext);
	// console.log(listCtx.passwordList);
	// console.log(listCtx.filteredList);

	const deleteHandler = (id) => {
		listCtx.deletePassword(id);
	};

	const editHandler = (edit) => {
		listCtx.editPassword(edit);
		props.onShowForm();
	};

	const { searchKey } = listCtx;
	let displayedList;
	if (searchKey.trim().length > 0) {
		displayedList = listCtx.passwordList.filter((element) => {
			return element.title.toLowerCase().indexOf(searchKey.toLowerCase()) !== -1;
		});
	} else {
		displayedList = listCtx.passwordList;
	}

	const { totalHandle } = listCtx;
	useEffect(() => {
		// console.log("effect running");
		totalHandle(displayedList.length);
	}, [displayedList.length, totalHandle]);

	const listData = displayedList.map((data) => {
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
