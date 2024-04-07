module.exports = {
  // Add a description in Russian to all types
  types: [
    {
      value: "build",
      name: "build: Project build or changes to external dependencies"
    },
    { value: "ci", name: "ci: CI configuration and script work" },
    { value: "docs", name: "docs: Documentation update" },
    { value: "feat", name: "feat: Adding new functionality" },
    { value: "fix", name: "fix: Bug fixes" },
    {
      value: "perf",
      name: "perf: Changes aimed at improving performance"
    },
    {
      value: "refactor",
      name:
        "refactor: Code edits without fixing bugs or adding new features"
    },
    { value: "revert", name: "revert: Revert to previous commits" },
    {
      value: "style",
      name:
        "style: Code style fixes (tabs, spaces, dots, commas, etc.)"
    },
    { value: "test", name: "test: Adding tests" }
  ],

  // Scope. It characterizes the code segment that the changes touched
  scopes: [
    { name: "commitizen" },
    { name: "git" },
    { name: "scripts" },
    { name: "components" },
    { name: "composables" },
    { name: "modules" },
    { name: "plugins" },
    { name: "utils" },
  ],

  // Ability to set a special SCOPE for a certain type of commit (example for 'fix')
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */

  // We'll change the default questions
  messages: {
    type: "What changes are you making?",
    scope: "Select the SCOPE you changed (optional):",
    // Will ask if allowCustomScopes is true
    customScope: "Specify your SCOPE:",
    subject: "Write a SHORT description in IMPERATIVE mood:\n",
    body:
      'Write a DETAILED description (optional). Use "|" for a new line:\n',
    breaking: "List of BREAKING CHANGES (optional):\n",
    footer:
      "Place for meta data (tickets, links, and the rest). For example: PID-700, PID-800:\n",
    confirmCommit: "Are you satisfied with the resulting commit?"
  },

  // We'll allow a custom SCOPE
  allowCustomScopes: true,

  // Ban on Breaking Changes
  allowBreakingChanges: false,

  // Prefix for the footer
  footerPrefix: "META DATA:",

  // limit subject length
  subjectLimit: 72
};
