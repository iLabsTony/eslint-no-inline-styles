const get = require("lodash.get");

module.exports = {
	rules: {
		"no-inline-styles": {
			create: function (context) {
				return {
					JSXOpeningElement(node) {
						node.attributes.map(attr => {
							const attrName = get(attr, "name.name");
							if (attrName === "style") {
								context.report(node, prop.loc, "Inline styles are not allowed");
							}
						});
					}
				};
			}
		}
	}
};
