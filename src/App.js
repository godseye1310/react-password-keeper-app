import React from "react";
import ContextProvidder from "./store/ContextProvidder";
import Header from "./components/Layout/Header";
import AddForm from "./components/AddPassword/AddForm";
import PasswordList from "./components/Passwords/PasswordList";

function App() {
	console.log("app running");
	return (
		<ContextProvidder>
			<Header />

			<AddForm />

			<PasswordList />
		</ContextProvidder>
	);
}

export default App;
