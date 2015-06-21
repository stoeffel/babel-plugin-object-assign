export default function ({ Plugin, types: t }) {
  return new Plugin("object-assign", {
    metadata: {
      group: "builtin-pre"
    },

    visitor: {
      CallExpression: function (node, parent, scope, file) {
        if (this.get("callee").matchesPattern("Object.assign")) {
          node.callee = file.addHelper("extends");
        }
      }
    }
  });
}
