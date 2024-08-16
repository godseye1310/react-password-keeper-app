import React from "react";
import globalContext from "./global-context";

const ContextProvidder = (props) => {
	const globalCtx = {
		Item: [],
		cart: [],
		addItem: (ItemList) => {},
		addCart: (cartList) => {},
		removeCart: (id) => {},
		amount: 0,
	};
	return (
		<globalContext.Provider value={globalCtx}>{props.children}</globalContext.Provider>
	);
};

export default ContextProvidder;
