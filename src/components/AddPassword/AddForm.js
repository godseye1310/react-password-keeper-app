import React, { useContext } from "react";
import styles from "./AddForm.module.css";
import ModalOverlay from "./../UI/ModalOverlay";
import Button from "../UI/Button";
import globalContext from "../../store/global-context";

const AddForm = () => {
	const formCtx = useContext(globalContext);
	// const [mytitle, setTitle] = useState("");
	// const [passcode, setPasscode] = useState("");
	const { mytitle, setTitle, passcode, setPasscode } = formCtx.setData;

	const titleHandler = (event) => {
		// console.log(formCtx.setData);
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
		formCtx.formDisplayHandler(false);
		// console.log(passwordData);
	};

	const closeForm = () => {
		formCtx.formDisplayHandler(false);
	};

	let passwordForm = (
		<ModalOverlay onClose={closeForm}>
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
					<Button onClick={closeForm}>X</Button>
					<Button type="submit">Add </Button>
				</div>
			</form>
		</ModalOverlay>
	);

	return <>{formCtx.onDisplay && passwordForm};</>;
};

export default AddForm;
