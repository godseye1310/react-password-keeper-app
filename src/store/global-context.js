import React from "react";

const globalContext = React.createContext({
	passwordList: [],
	addPassword: (ItemList) => {},
	deletePassword: (id) => {},
	editPassword: (id) => {},

	searchPassword: (search) => {},
	searchKey: "",

	setData: {},
});

export default globalContext;
