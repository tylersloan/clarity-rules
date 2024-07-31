import React from 'react'

interface SectionProps {
  children: React.ReactNode
}

export function Section({ children }: SectionProps) {
  return (
    <section className='z-10 bg-white border border-gray-200 rounded-lg first:mt-0 mt-4 relative connector-bar overflow-hidden'>
      {children}
    </section>
  )
}
