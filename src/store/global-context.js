import React from "react";

const globalContext = React.createContext({
	passwordList: [],

	formDisplayHandler: (show) => {},
	onDisplay: false,

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
