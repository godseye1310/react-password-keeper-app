import React from "react";

const Search = () => {
	return (
		<div>
			<label htmlFor="search">Search Password :</label>
			<input type="text" id="search" onChange={searchHandler} />
		</div>
	);
};

export default Search;
