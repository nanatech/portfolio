import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Career Assistant', path: '/assistant' },
  /*{ label: 'Projects', path: '/projects' },TODO: Unhide when more projects are added */
  /*{ label: 'Contact', path: '/contact' },*/
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-surface-border/50 bg-surface/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <NavLink
          to="/"
          className="text-lg font-bold tracking-tight text-white transition-colors hover:text-accent-hover"
        >
          Najah Smith<span className="text-accent"></span>
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-accent/10 text-accent-hover'
                    : 'text-zinc-400 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/contact"
          className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover md:hidden"
        >
          Contact
        </NavLink>
      </div>
    </header>
  )
}
