import { PlayCircle } from '~/components/other/svgs/play-circle'

interface SectionHeaderProps {
  heading: string
  colorClass: string
}

export function SectionHeader({ heading, colorClass }: SectionHeaderProps) {
  return (
    <div className='border-b-[1px] px-6 py-5'>
      <div className='flex items-center gap-4'>
        <div className={`${colorClass} size-6`}>
          <PlayCircle />
        </div>
        {heading}
      </div>
    </div>
  )
}
