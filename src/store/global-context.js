import React from "react";

const globalContext = React.createContext({
	passwordList: [],

	addPassword: (ItemList) => {},
	deletePassword: (id) => {},
	editPassword: (edit) => {},

	searchPassword: (search) => {},
	searchKey: "",

	setData: {},

	total: 0,
	totalHandle: (length) => {},
});

export default globalContext;
