import { NavLink } from '@remix-run/react'
import { useEffect, useState } from 'react'
import { getRules } from '~/api/rules'

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
      <h1>Clarity Rules!</h1>
      <ul>
        <li>
          <a href='/rule/new'>New Rule</a>
        </li>
      </ul>
      <ul>
        <li>Enabled Rules</li>
        {rules.map((rule) => (
          <li key={rule.id}>
            <NavLink to={`/rule/${rule.id}`}>
              {rule.id} - {rule.schoolId}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
