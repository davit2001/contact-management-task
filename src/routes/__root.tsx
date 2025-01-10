import { Outlet, createRootRoute } from '@tanstack/react-router'
import Sidebar from '@/components/Sidebar.tsx';
import Loader from '@/assets/spinner.svg';
import { SnackbarProvider } from 'notistack';

export const Route = createRootRoute({
  component: RootComponent,
  pendingComponent: () => <Loader />
})

function RootComponent() {
  return (
    <div className="flex">
      <SnackbarProvider>
        <Sidebar />
        <Outlet />
      </SnackbarProvider>
    </div>
  )
}
