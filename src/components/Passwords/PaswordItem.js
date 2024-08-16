import React from "react";
import Button from "../UI/Button";

const PaswordItem = (props) => {
	const handleDelete = () => {
		props.onDelete(props.id);
	};

	const handleEdit = () => {
		props.onEdit(props.id);
	};
	return (
		<>
			<li>
				<div>
					<h3>
						{props.title} : {props.password}
					</h3>
				</div>
				<div>
					<Button onClick={handleDelete}>Delete</Button>
					<Button onClick={handleEdit}>Edit</Button>
				</div>
			</li>
			<hr />
		</>
	);
};

export default PaswordItem;
