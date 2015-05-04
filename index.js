module.exports = function (babel) {
	return new babel.Transformer("object-assign", {
		CallExpression: function (node, parent, scope, file) {
			if (this.get("callee").matchesPattern("Object.assign")) {
				node.callee = file.addHelper("extends");
			}
		}
	});
};
