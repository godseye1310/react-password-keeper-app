import React from "react";
import ContextProvidder from "./store/ContextProvidder";
import Header from "../components/Layout/Header";

function App() {
	return (
		<ContextProvidder>
			<Header />
		</ContextProvidder>
	);
}

export default App;
