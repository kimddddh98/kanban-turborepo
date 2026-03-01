const ROUTES = {
  HOME: '/',
  BOARD: '/board',
} as const

const ROUTES_KEYS: Record<keyof typeof ROUTES, keyof typeof ROUTES> = {
  HOME: 'HOME',
  BOARD: 'BOARD',
} as const

export { ROUTES, ROUTES_KEYS }
