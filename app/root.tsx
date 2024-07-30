import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import './tailwind.css'
import { Button } from './components/global/button'
import Select from './components/global/select/select'
import React from 'react'
import { Input } from './components/global/input'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <div className='header'>
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
              <Button variant='outline' color='default'>
                Cancel
              </Button>
              <Button variant='solid'>Save and Enable Rule</Button>
            </div>
          </div>
        </div>
        <main className='container mt-8 '>
          <section className='border border-gray-200 rounded-lg'>
            <div className='border-b-[1px] px-6 py-5'>
              <div className='flex items-center gap-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='#755DC8'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='none'
                  className='size-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                  />
                  <path
                    fill='white'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z'
                  />
                </svg>
                Conditions
              </div>
            </div>
            <div className='px-6 py-5'>
              <div>
                <div className='grid grid-cols-[50px_auto]'>
                  <span>If</span>
                  <div>
                    {/* map of inputs/selects */}
                    <Select />
                  </div>
                  <div>&nbsp;</div>
                  <div className='max-w-fit mt-3'>
                    <Button variant='ghost' color='primary'>
                      Add Condition
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className='border-t-[1px] px-6 py-5 text-[#65657A]'>
              <div className='flex items-center gap-4'>
                <svg
                  width='12'
                  height='12'
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6 0C2.7 0 0 2.7 0 6C0 9.3 2.7 12 6 12C9.3 12 12 9.3 12 6C12 2.7 9.3 0 6 0ZM6.75 9H5.25V5.25H6.75V9ZM6 4.5C5.55 4.5 5.25 4.2 5.25 3.75C5.25 3.3 5.55 3 6 3C6.45 3 6.75 3.3 6.75 3.75C6.75 4.2 6.45 4.5 6 4.5Z'
                    fill='#9090A6'
                  />
                </svg>

                <span>
                  Given conditions match with 692 existing applicants.
                </span>
              </div>
            </div>
          </section>
          <section className='border border-gray-200 rounded-lg mt-4'>
            <div className='border-b-[1px] px-6 py-5'>
              <div className='flex items-center gap-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='#3EB660'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='none'
                  className='size-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                  />
                  <path
                    fill='white'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z'
                  />
                </svg>
                Actions
              </div>
            </div>
            <div className='px-6 py-5'>
              <div>
                <div className='grid grid-cols-[50px_auto] grid-rows-2'>
                  <span>&nbsp;</span>
                  <div>
                    {[1, 2].map((i, idx) => {
                      return (
                        <div className='flex gap-2.5 mb-3 last:mb-0' key={i}>
                          <Select />
                          <div className='w-full max-w-80'>
                            <Input placeholder='Description of Document' />
                          </div>
                          {idx > 0 && (
                            <div className='text-[#65657A]'>
                              <Button variant='outline' className='h-full'>
                                <span className='sr-only'>Delete action</span>
                                <svg
                                  width='16'
                                  height='16'
                                  viewBox='0 0 17 17'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    d='M15.5 3.5H12.5V1.5C12.5 1.23478 12.3946 0.98043 12.2071 0.792893C12.0196 0.605357 11.7652 0.5 11.5 0.5H5.5C5.23478 0.5 4.98043 0.605357 4.79289 0.792893C4.60536 0.98043 4.5 1.23478 4.5 1.5V3.5H1.5C1.23478 3.5 0.98043 3.60536 0.792893 3.79289C0.605357 3.98043 0.5 4.23478 0.5 4.5C0.5 4.76522 0.605357 5.01957 0.792893 5.20711C0.98043 5.39464 1.23478 5.5 1.5 5.5H15.5C15.7652 5.5 16.0196 5.39464 16.2071 5.20711C16.3946 5.01957 16.5 4.76522 16.5 4.5C16.5 4.23478 16.3946 3.98043 16.2071 3.79289C16.0196 3.60536 15.7652 3.5 15.5 3.5ZM6.5 3.5V2.5H10.5V3.5H6.5Z'
                                    fill='#65657A'
                                  />
                                  <path
                                    d='M2.55499 7.5L3.00499 15.6C3.02987 15.8475 3.14611 16.0769 3.33102 16.2433C3.51593 16.4097 3.75623 16.5012 4.00499 16.5H13.005C13.2529 16.5 13.492 16.4079 13.6758 16.2416C13.8597 16.0753 13.9752 15.8467 14 15.6L14.45 7.5H2.55499Z'
                                    fill='#65657A'
                                  />
                                </svg>
                              </Button>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                  <div>&nbsp;</div>
                  <div className='max-w-fit mt-3'>
                    <Button variant='ghost'>Create document request</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function HydrateFallback() {
  return <p>Loading...</p>
}
