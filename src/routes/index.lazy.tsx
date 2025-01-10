import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-8">
      <h1 className="text-black text-4xl">Main page</h1>
      <p className="text-black">
        You can see main page content if you click on the user link in the sidebar
      </p>
    </div>
  )
}
