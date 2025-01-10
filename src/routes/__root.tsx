import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import Sidebar from '@/components/Sidebar.tsx';

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <Sidebar />
      <Outlet />
    </React.Fragment>
  )
}
