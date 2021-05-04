/*  Counselor Class
*/
import { Taglist } from "taglist";
import { Term } from "./Term";

export function Counselor(name, dob, education, bio, taglist) {
	const obj = {};

	// attributes
	obj.name = name;
	obj.dob = dob;
	obj.education = education;
	obj.bio = bio;
	obj.taglist = taglist;

	// methods
	obj.setName = (name) => {
		obj.name = name;
	};

	//@TODO: finish Counselor
	return obj;
}