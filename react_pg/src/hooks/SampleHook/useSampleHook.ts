import { IReturnData } from "./useSampleHook.types";

export const useSampleHook = () => {
	const returnData: IReturnData = {
		placeholderData: "placeholder",
		placeholderFunc: () => 10,
	};
	return returnData;
};
