import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: true,

  // TypeScript and Vue are auto-detected, you can also explicitly enable them:
  typescript: true,
  vue: true,

  ignores: [
    'node_modules',
    'dist',
    '.nuxt',
    '.output',
    'coverage',
    'components.d.ts',
    'nuxt.d.ts',
    '.husky',
    '.vscode',
  ],
})
