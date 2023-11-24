import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './context/auth.tsx'

import AppRouter from './Routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <ChakraProvider>
        <RouterProvider router={AppRouter} />
      </ChakraProvider>
    </AuthProvider>
  </React.StrictMode>,
)
