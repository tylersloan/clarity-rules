import { NavLink } from '@remix-run/react'

interface HeaderProps {
  actions: React.ReactNode
}

export function Header({ actions }: HeaderProps) {
  return (
    <header className='header'>
      <div className='flex items-center justify-between container py2'>
        <NavLink to='/' className='flex items-center gap-6'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={3}
            stroke='#9090A6'
            className='size-3'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18'
            />
          </svg>
          Advanced
        </NavLink>
        {actions && <div className='flex items-center gap-2'>{actions}</div>}
      </div>
    </header>
  )
}
