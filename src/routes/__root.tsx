// src/routes/__root.tsx
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-gray-50">
      
      <nav className="flex gap-6 p-4 bg-white shadow-sm">
        <Link to="/" className="text-gray-700 font-mono hover:text-gray-600 [&.active]:font-bold [&.active]:text-black-600">
          Home
        </Link>
        <Link to="/about" className="text-gray-700 font-mono hover:text-gray-600 [&.active]:font-bold [&.active]:text-black-600">
          About
        </Link>
        <Link to="/portfolio" className="text-gray-700 font-mono hover:text-gray-600 [&.active]:font-bold [&.active]:text-black-600">
          Portfolio
        </Link>
        <Link to="/contact" className="text-gray-700 font-mono hover:text-gray-600 [&.active]:font-bold [&.active]:text-black-600">
          Contact
        </Link>
      </nav>

      <main className="p-6">
        <Outlet />
      </main>

      <TanStackRouterDevtools />
    </div>
  ),
})