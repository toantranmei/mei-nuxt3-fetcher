import { defineNuxtPlugin, useRuntimeConfig } from '#imports'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const apiFetcher = $fetch.create({
    baseURL: config.public.meiFetcher.baseURL,
    onRequest() {},
  })

  return {
    provide: {
      apiFetcher,
    },
  }
})
