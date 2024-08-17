import React from "react";

const globalContext = React.createContext({
	passwords: [],
	addPassword: (ItemList) => {},
	deletePassword: (id) => {},
	editPassword: (id) => {},

	searchpassword: (search) => {},
	filteredList: [],

	setData: {},
	total: 0,
});

export default globalContext;
