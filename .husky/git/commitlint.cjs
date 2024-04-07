const cz = require("./commitizen.cjs")

module.exports = {
  rules: {
    // The body of the commit must start with a blank line
    "body-leading-blank": [2, "always"],

    // The footer of the commit must start with a blank line
    "footer-leading-blank": [2, "always"],

    // Maximum header length 72 characters
    "header-max-length": [
      2,
      "always",
      cz.subjectLimit
    ],

    // Scope must always be in lowercase
    "scope-case": [2, "always", "lower-case"],

    // List all possible commit scopes
    'scope-enum': [
      1,
      'always',
      cz.scopes.map(type => type.name)
    ],

    // Description cannot be empty
    "subject-empty": [2, "never"],

    // Description must not end with '.'
    "subject-full-stop": [2, "never", "."],

    // Type must always be in lowercase
    "type-case": [2, "always", "lower-case"],

    // Type cannot be empty
    "type-empty": [2, "never"],

    // List all possible types of commits
    "type-enum": [
      2,
      "always",
      cz.types.map(type => type.value)
    ]
  }
};
