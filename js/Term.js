/* Term object
*/

export function Term(term, definition, url) {
	const obj = {};
	
	// attributes
	obj.term = term;
	obj.definition = definition;
	obj.url = url;

	// methods
	obj.toString = () => {
		return `${obj.term}: ${obj.definition} - ${url}`;
	};
	return obj;

}