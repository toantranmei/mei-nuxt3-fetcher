/**
 * Configuration for the whole module.
 */
export interface ModuleUserOptions {
  /**
   * Whether the module is enabled at all
   */
  isEnabled?: boolean

  baseURL: string
}

export interface ModuleUserOptionsNormalized extends ModuleUserOptions {}

// Augment types
declare module 'nuxt/schema' {
  interface PublicRuntimeConfig {
    meiFetcher: ModuleUserOptionsNormalized
  }
}
