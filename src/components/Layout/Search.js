import React, { useContext, useState } from "react";
import globalContext from "../../store/global-context";

const Search = () => {
	const searchCtx = useContext(globalContext);
	const [searchPW, setSearchPW] = useState("");
	const handleSearch = (event) => {
		setSearchPW(event.target.value);
		searchCtx.searchpassword(searchPW);
	};

	return (
		<div>
			<label htmlFor="search">Search Password :</label>
			<input type="text" id="search" onChange={handleSearch} />
		</div>
	);
};

export default Search;
