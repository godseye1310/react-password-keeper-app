import React from "react";

const globalContext = React.createContext({
	Item: [],
	cart: [],
	addItem: (ItemList) => {},
	addCart: (cartList) => {},
	removeCart: (id) => {},
	amount: 0,
});

export default globalContext;
