export type RequestErrorContext = {
  routerKind: 'Pages Router' | 'App Router'
  routePath: string // the route file path, e.g. /app/blog/[dynamic]
  routeType: 'render' | 'route' | 'action' | 'middleware'
  renderSource?:
    | 'react-server-components'
    | 'react-server-components-payload'
    | 'server-rendering'
  // TODO: other future instrumentation context
}

export type InstrumentationOnRequestError = (
  error: unknown,
  errorRequest: Readonly<{
    method: string
    url: string
    headers: NodeJS.Dict<string | string[]>
  }>,
  errorContext: Readonly<RequestErrorContext>
) => void | Promise<void>

export type InstrumentationModule = {
  register?(): void
  onRequestError?: InstrumentationOnRequestError
}
