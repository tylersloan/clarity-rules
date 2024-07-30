import { Button } from '~/components/global/button'

export function Header() {
  return (
    <header className='header'>
      <div className='flex items-center justify-between container py2'>
        <a href='/' className='flex items-center gap-6'>
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
        </a>
        <div className='flex items-center gap-2'>
          <Button variant='outline'>Cancel</Button>
          <Button variant='solid'>Save and Enable Rule</Button>
        </div>
      </div>
    </header>
  )
}
