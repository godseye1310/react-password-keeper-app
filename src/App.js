import React, { useState } from "react";
import ContextProvidder from "./store/ContextProvidder";
import Header from "./components/Layout/Header";
import AddForm from "./components/AddPassword/AddForm";
import PasswordList from "./components/Passwords/PasswordList";

function App() {
	console.log("app running");

	const [formDisplay, setFormDisplay] = useState(false);
	const formDisplayHandler = () => {
		setFormDisplay(true);
	};

	const formDisplayCloser = () => {
		setFormDisplay(false);
	};

	return (
		<ContextProvidder>
			<Header onDisplayForm={formDisplayHandler} />

			{formDisplay && <AddForm onCloseForm={formDisplayCloser} />}

			<PasswordList onShowForm={formDisplayHandler} />
		</ContextProvidder>
	);
}

export default App;
