import { IUserDetails } from "./ResourceDetails.types";

const testUser: IUserDetails = {
	id: 1,
	name: "User 1",
	email: "user1@gmail.com",
	age: 19,
	address: "User 1 address",
	profilePicture: "",
};

export const testResourceDetailsProps = {
	name: "user_details",
	entity: testUser,
	fieldsMapping: {
		name: "Name",
		email: "Email",
		age: "Age",
		address: "Address",
		profilePicture: "Profile Picture",
	},
};
