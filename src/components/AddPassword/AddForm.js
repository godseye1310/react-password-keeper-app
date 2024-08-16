import React, { useContext, useState } from "react";
import styles from "./AddForm.module.css";
import ModalOverlay from "./../UI/ModalOverlay";
import Button from "../UI/Button";
import globalContext from "../../store/global-context";

const AddForm = (props) => {
	const [mytitle, setTitle] = useState("");
	const [passcode, setPasscode] = useState("");
	const formCtx = useContext(globalContext);

	const titleHandler = (event) => {
		setTitle(event.target.value);
	};
	const passcodeHandler = (event) => {
		setPasscode(event.target.value);
	};
	const addPasswordHandler = (event) => {
		event.preventDefault();
		const passwordData = {
			title: mytitle,
			password: passcode,
			id: Math.random().toString(),
		};

		formCtx.addPassword(passwordData);
		setTitle("");
		setPasscode("");
		// console.log(passwordData);
	};
	return (
		<ModalOverlay>
			<form onSubmit={addPasswordHandler} className={styles.form}>
				<div>
					<label htmlFor="title">title :</label>
					<input
						type="text"
						id="title"
						value={mytitle}
						onChange={titleHandler}
						required
					/>
				</div>
				<div>
					<label htmlFor="kpassword">Password :</label>
					<input
						type="text"
						id="kpassword"
						value={passcode}
						onChange={passcodeHandler}
						required
					/>
				</div>
				<div>
					<Button onClick={props.onCloseForm}>X</Button>
					<Button type="submit">Add </Button>
				</div>
			</form>
		</ModalOverlay>
	);
};

export default AddForm;
