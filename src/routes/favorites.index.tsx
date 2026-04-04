import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/favorites/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <main className='mt-10'>
    <h1 className='page-header'>Your favorite recipes right here!</h1>
  </main>
}
