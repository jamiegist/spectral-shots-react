import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-neutral-950 text-white">
      <nav className="flex justify-between items-center px-8 py-5 bg-black border-b border-neutral-800">
        <Link to="/" className="font-mono text-white font-bold tracking-wider hover:text-neutral-300 transition-colors">
          spectral shots
        </Link>

        <div className="flex space-x-8">
          <Link to="/portfolio" className="text-neutral-400 font-mono hover:text-white [&.active]:font-bold [&.active]:text-white">
            portfolio
          </Link>
          <Link to="/contact" className="text-neutral-400 font-mono hover:text-white [&.active]:font-bold [&.active]:text-white">
            contact
          </Link>
        </div>
      </nav>

      <main className="p-6">
        <Outlet />
      </main>

      <TanStackRouterDevtools />
    </div>
  ),
})