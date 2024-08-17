import React, { useContext, useEffect, useState } from "react";
import globalContext from "../../store/global-context";

const Search = () => {
	const { searchPassword } = useContext(globalContext);
	const [searchPW, setSearchPW] = useState("");

	const handleSearch = (event) => {
		setSearchPW(event.target.value);
		// searchPassword(event.target.value);
	};

	useEffect(() => {
		const timeID = setTimeout(() => {
			// console.log("searching...");
			searchPassword(searchPW);
		}, 1000);

		return () => {
			// console.log("clean up");
			clearTimeout(timeID);
		};
	}, [searchPassword, searchPW]);

	return (
		<div>
			<label htmlFor="search">Search Password :</label>
			<input type="text" id="search" onChange={handleSearch} />
		</div>
	);
};

export default Search;
