import React from 'react'

interface SectionFooterProps {
  children: React.ReactNode
}

export function SectionFooter({ children }: SectionFooterProps) {
  return (
    <div className='border-t-[1px] rounded-bl-md rounded-br-md px-6 py-4 text-[#65657A] bg-[#fbfbfc]'>
      {children}
    </div>
  )
}
