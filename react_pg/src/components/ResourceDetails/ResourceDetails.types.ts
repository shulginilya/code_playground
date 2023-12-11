interface IUser {
	id: number;
	name: string;
	email: string;
	age: number;
}

export interface IUserDetails extends IUser {
	address: string;
	profilePicture: string;
}

type SupportedEntities = IUserDetails;

export interface IResourceDetilsProps {
	name: string;
	entity: SupportedEntities | null;
	fieldsMapping?: {
		[key: string]: string | number;
	};
	excludedFields?: string[];
}
