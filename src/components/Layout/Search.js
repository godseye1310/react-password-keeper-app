import React, { useContext } from "react";
import globalContext from "../../store/global-context";

const Search = () => {
	const { searchPassword } = useContext(globalContext);
	// const [searchPW, setSearchPW] = useState("");

	const handleSearch = (event) => {
		// setSearchPW(event.target.value);
		searchPassword(event.target.value);
	};

	// useEffect(() => {
	// 	console.log("effect running");

	// 	const timeID = setTimeout(() => {
	// 		searchPassword(searchPW);
	// 	}, 1000);

	// 	return () => {
	// 		clearTimeout(timeID);
	// 	};
	// }, [searchPW]);

	return (
		<div>
			<label htmlFor="search">Search Password :</label>
			<input type="text" id="search" onChange={handleSearch} />
		</div>
	);
};

export default Search;
