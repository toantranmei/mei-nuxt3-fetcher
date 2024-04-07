import { addImports, addImportsDir, addPlugin, createResolver, defineNuxtModule, useLogger } from '@nuxt/kit'
import defu from 'defu'
// eslint-disable-next-line import/order
import { existsSync, statSync } from 'node:fs'
import { joinURL } from 'ufo'
import { name, version } from '../package.json'
import { MODULE_CONFIG_KEY } from './constants'
import type { ModuleUserOptions } from './runtime/types'
import { getOriginAndPathnameFromURL } from './runtime/utils/url'

export default defineNuxtModule<ModuleUserOptions>({
  meta: {
    name,
    version,
    configKey: MODULE_CONFIG_KEY,
  },
  // Default configuration options of the Nuxt module
  defaults: {
    isEnabled: true,
    baseURL: 'https://jsonplaceholder.typicode.com',
  },
  async setup(userOptions, nuxt) {
    const logger = useLogger(name)

    // 0. Assemble all options
    const { origin, pathname = '/resources' } = getOriginAndPathnameFromURL(
      userOptions.baseURL ?? '',
    )

    const options = {
      ...defu(userOptions, {
        computed: {
          origin,
          pathname,
          fullBaseUrl: joinURL(origin ?? '', pathname),
        },
      }),
    }

    // 1. Check if module should be enabled at all
    if (!options.isEnabled) {
      logger.info(`Skipping \`${name}\` setup, as module is disabled`)
      return
    }

    logger.info(`\`${name}\` setup starting`)

    nuxt.options.runtimeConfig = nuxt.options.runtimeConfig || { public: {} }
    nuxt.options.runtimeConfig.public.meiFetcher = options

    // 3. Add the correct nuxt-auth app composable, for the desired backend
    const { resolve } = createResolver(import.meta.url)

    addImports([
      {
        name: 'HttpFactory',
        from: resolve(`./runtime/factory`),
      },
    ])

    // 3. Add plugin for initial load
    addPlugin(resolve('./runtime/plugins/fetcher'))

    // 4. auto-imports all services folder
    for (const layer of nuxt.options._layers) {
      const servicesPath = resolve(layer.cwd, 'services')
      if (existsSync(servicesPath) && statSync(servicesPath).isDirectory())
        addImportsDir(servicesPath)
    }

    logger.success(`\`${name}\` setup done`)
  },
})
