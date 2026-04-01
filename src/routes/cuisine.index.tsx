import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cuisine/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/cuisine/"!</div>
}
