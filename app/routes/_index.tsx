import { NavLink } from '@remix-run/react'
import { useEffect, useState } from 'react'
import { getRules } from '~/api/rules'
import { formatDate } from '~/utils/dats'

export default function Index() {
  const [rules, setRules] = useState([])

  useEffect(() => {
    const fetchRules = async () => {
      try {
        const fetchedRules = await getRules()
        setRules(fetchedRules.data)
      } catch (error) {
        console.error('Error fetching rules:', error)
      }
    }

    fetchRules()
  }, [])

  return (
    <div className='p-4'>
      <header>
        <img
          className='aspect-[32/9] w-1/4'
          src='https://cdn.prod.website-files.com/65a7276ea20340bc81f3bcec/65a9dd7ea25ab3de7a7273fd_ClarityLogo.svg'
          alt='Clarity Logo'
        />
        <em className=' text-5xl font-extrabold text-[#310b56] translate-x-[130px] tracking-wider translate-y-[-10px] block'>
          Rules
        </em>
      </header>

      <section className=' w-full rounded-md overflow-hidden mt-8 border-[1px] border-[#310b56]/15'>
        <div className='flex items-center'>
          <div className='w-full max-w-screen-xl mx-auto'>
            <div className='relative overflow-hidden bg-[#310b56] shadow-md '>
              <div className='flex-row items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4'>
                <div>
                  <h5 className='mr-3 text-neutral-50 font-semibold '>
                    Document Request Rules
                  </h5>
                  <p className='text-[#b7a1f9]'>
                    Here you can manage your document request rules.
                  </p>
                </div>
                <NavLink
                  to='/rule/new'
                  className='flex items-center justify-center px-4 py-2 text-sm font-medium text-[#310b56] bg-[#ffdb5c] rounded-[16rem] hover:bg-white'
                >
                  Add New Rule
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className='relative overflow-x-auto'>
          <table className='w-full text-sm text-left rtl:text-right text-gray-500 '>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50  '>
              <tr className='border-b border-[#310b56]/15'>
                <th scope='col' className='px-6 py-3'>
                  ID
                </th>
                <th scope='col' className='px-6 py-3'>
                  School ID
                </th>
                <th scope='col' className='px-6 py-3'>
                  Condition IDs
                </th>
                <th scope='col' className='px-6 py-3'>
                  Document IDs
                </th>
                <th scope='col' className='px-6 py-3'>
                  Created At
                </th>
              </tr>
            </thead>
            <tbody>
              {rules &&
                rules.map((rule) => (
                  <tr
                    key={rule.id}
                    className='bg-white border-b border-[#310b56]/15'
                  >
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '
                    >
                      <NavLink
                        className='flex items-center justify-center px-4 py-2 text-sm font-medium text-[#310b56] bg-[#ffdb5c] rounded-[16rem] hover:bg-white'
                        to={`/rule/${rule.id}`}
                      >
                        {rule.id}
                      </NavLink>
                    </th>
                    <td className='px-6 py-4'>{rule.schoolId}</td>
                    <td className='px-6 py-4'>
                      {rule.conditionIds.join(', ')}
                    </td>
                    <td className='px-6 py-4'>{rule.documentIds.join(', ')}</td>
                    <td className='px-6 py-4'>{formatDate(rule.created_at)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
