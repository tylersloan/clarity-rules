import { Button } from '~/components/global/button'
import { Input } from '~/components/global/input'
import Select from '~/components/global/select/select'
import { Header } from '~/pages/home/header'
import { PlayCircle } from '~/components/other/svgs/play-circle'
import { SectionFooter } from './section-footer'
import { SectionHeader } from './section-header'
import { InfoCircle } from '~/components/other/svgs/info-circle'
import { Section } from './section'

export function Rules() {
  return (
    <>
      <Header />
      <main className='container mt-8 '>
        <section className='border border-gray-200 rounded-lg overflow-hidden'>
          <SectionHeader heading='Conditions' colorClass='text-[#755DC8]' />
          <div className='px-6 py-5'>
            <div>
              <div className='grid grid-cols-[50px_auto] '>
                <span>If</span>
                <div>
                  {[1, 2].map((i, idx) => {
                    return (
                      <div className='flex gap-2.5 mb-3 last:mb-0' key={idx}>
                        <Select />
                        {idx > 0 && (
                          <div className='text-[#65657A]'>
                            <Button
                              variant='outline'
                              shape='square'
                              className='h-full'
                            >
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
                  <Button variant='ghost' color='primary'>
                    Add Condition
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <SectionFooter>
            <div className='flex items-center gap-4 translate-x-1'>
              <InfoCircle />
              <span>Given conditions match with 692 existing applicants.</span>
            </div>
          </SectionFooter>
        </section>
        <Section>
          <SectionHeader heading='Actions' colorClass='text-[#3EB660]' />
          <div className='px-6 py-5'>
            <div>
              <div className='grid grid-cols-[50px_auto] '>
                <span />
                <div>
                  {[1, 2, 3, 4].map((i, idx) => {
                    return (
                      <div className='flex gap-2.5 mb-3 last:mb-0' key={i}>
                        <Select />
                        <div className='w-full max-w-80'>
                          <Input placeholder='Description of Document' />
                        </div>
                        {idx > 0 && (
                          <div className='text-[#65657A]'>
                            <Button
                              variant='outline'
                              shape='square'
                              className='h-full'
                            >
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
        </Section>
      </main>
    </>
  )
}
