import React, { useState } from "react";
import globalContext from "./global-context";

const ContextProvidder = (props) => {
	const [passwordList, setPasswordList] = useState([]);
	const [filteredPasswordList, setFilteredPasswordList] = useState([]);

	const addPasswordHandler = (list) => {
		setPasswordList((prevList) => {
			return [...prevList, list];
		});
	};

	const searchHandler = (search) => {
		// console.log(search);
		setFilteredPasswordList(() => {
			// for (let pdata of prevList) {
			// 	if (pdata.id === id) {
			// 		return prevList.filter((pdata) => pdata.id !== id);
			// 	}
			// }
			// console.log(prevList);
			console.log(passwordList);

			let mysearch;
			if (search.trim().length > 0) {
				mysearch = passwordList.filter((element) => {
					if (element.title.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
						return element.title;
					}
					return 0;
				});
			} else {
				mysearch = passwordList;
			}
			return mysearch;
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

	const editPasswordHandler = (id) => {
		setPasswordList((prevList) => {
			for (let pdata of prevList) {
				if (pdata.id === id) {
					return prevList.filter((pdata) => pdata.id !== id);
				}
			}
		});
	};

	const globalCtx = {
		passwords: passwordList,
		addPassword: addPasswordHandler,
		deletePassword: deletePasswordHandler,
		editPassword: editPasswordHandler,
		searchpassword: searchHandler,
		filteredList: filteredPasswordList,
		total: 0,
	};

	return (
		<globalContext.Provider value={globalCtx}>{props.children}</globalContext.Provider>
	);
};

export default ContextProvidder;
