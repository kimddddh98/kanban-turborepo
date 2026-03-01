import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './layouts/AppLayout'
import { BoardPage } from '../pages/board/page'
import { HomePage } from '../pages/page'
import { ROUTES } from './consts/routes'

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.BOARD,
        element: <BoardPage />,
      },
    ],
  },
])
