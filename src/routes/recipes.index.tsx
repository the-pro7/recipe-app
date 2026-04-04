import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/recipes/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <main className='mt-10'>
    <h1 className='page-header'>Recipe catalogue</h1>
  </main>
}
