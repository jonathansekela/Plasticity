/* Taglist class
*/

import { Term } from "./Term";

export function Taglist(params) {
	const obj = {};

	// attributes
	obj.list = [];

	// methods
	obj.addTag = (name, definition, url) => {
		let canAdd = true;
		obj.list.forEach(tag => {
			if (tag.name === name) {
				canAdd = false;
			}
		});

		if (canAdd) {
			let term = new Term(name, definition, url);
			obj.list.push(term);
		}
	}

	obj.removeTag = (name) => {
		let finished = false
		for (let i = 0; i < obj.list.length && !finished; i++) {
			const tag = obj.list[i];
			if (tag.name === name) {
				obj.list.splice(i, 1);
				finished = true;
			}
		}
	}

	//@TODO: finish Taglist
	return obj;
}