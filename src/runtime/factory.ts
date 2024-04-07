import type { $Fetch, NitroFetchOptions } from 'nitropack'

interface IHttpFactory {
  method:
    | 'GET'
    | 'HEAD'
    | 'PATCH'
    | 'POST'
    | 'PUT'
    | 'DELETE'
    | 'CONNECT'
    | 'OPTIONS'
    | 'TRACE'
    | 'get'
    | 'head'
    | 'patch'
    | 'post'
    | 'put'
    | 'delete'
    | 'connect'
    | 'options'
    | 'trace'
  url: string
  fetchOptions?: NitroFetchOptions<'json'>
  body?: object
}

class HttpFactory {
  private readonly $fetch: $Fetch

  constructor(fetch: $Fetch) {
    this.$fetch = fetch
  }

  call<T>({ method, url, fetchOptions, body }: IHttpFactory): Promise<T> {
    return this.$fetch<T>(url, {
      method,
      body,
      headers: {
        'Content-Type': 'application/json',
      },
      ...fetchOptions,
    })
  }
}
export { HttpFactory }
