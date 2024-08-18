import React, { useCallback, useState } from "react";
import globalContext from "./global-context";

const ContextProvidder = (props) => {
	const [mytitle, setTitle] = useState("");
	const [passcode, setPasscode] = useState("");

	const [passwordList, setPasswordList] = useState([]);

	const addPasswordHandler = (list) => {
		setPasswordList((prevList) => {
			return [...prevList, list];
		});
	};

	const deletePasswordHandler = (id) => {
		setPasswordList((prevList) => {
			for (let pdata of prevList) {
				if (pdata.id === id) {
					return prevList.filter((pdata) => pdata.id !== id);
				}
			}
		});
	};
	const editPasswordHandler = (edit) => {
		setPasswordList((prevList) => {
			for (let pdata of prevList) {
				if (pdata.id === edit.id) {
					// console.log(edit);
					setTitle(edit.title);
					setPasscode(edit.password);
					return prevList.filter((pdata) => pdata.id !== edit.id);
				}
			}
		});
	};

	const [searchText, setSearchText] = useState("");
	const searchHandler = useCallback((search) => {
		// console.log(search);
		setSearchText(search);
	}, []);

	const [total, setTotal] = useState(0);
	const totalHandler = useCallback((length) => {
		setTotal(length);
	}, []);

	const [displayForm, setDisplayForm] = useState(false);
	const handleFormDisplay = (show) => {
		setDisplayForm(show);
	};

	const globalCtx = {
		passwordList: passwordList,

		formDisplayHandler: handleFormDisplay,
		onDisplay: displayForm,

		addPassword: addPasswordHandler,
		deletePassword: deletePasswordHandler,
		editPassword: editPasswordHandler,

		searchPassword: searchHandler,
		searchKey: searchText,

		setData: {
			mytitle,
			setTitle,
			passcode,
			setPasscode,
		},

		total: total,
		totalHandle: totalHandler,
	};

	return (
		<globalContext.Provider value={globalCtx}>{props.children}</globalContext.Provider>
	);
};

export default ContextProvidder;
