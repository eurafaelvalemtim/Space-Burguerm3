import { NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { name: 'Home', to: '/' },
  { name: 'Cardápio', to: '/contact' },
  { name: 'Pedido', to: '/support' },
  { name: 'Comanda', to: '/about' },
  { name: "Squad 1", to: '/faqs' }
]

export function NavLinks({ className }: { className?: string }) {
  return (
    <ul className={className}>
      {NAV_LINKS.map((link) => (
        <li key={link.name} className="ml-4">
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              isActive ? 'border-b text-white' : 'text-white hover:border-b'
            }
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
