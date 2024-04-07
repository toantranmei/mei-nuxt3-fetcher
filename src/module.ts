import { addPlugin, createResolver, defineNuxtModule, useLogger } from '@nuxt/kit'
import { name, version } from '../package.json'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: '<DEFINE_YOUR_PREFIX_KEY>',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup() {
    const logger = useLogger(name)
    const resolver = createResolver(import.meta.url)

    logger.info(`\`${name}\` setup starting`)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))

    logger.success(`\`${name}\` setup done`)
  },
})
