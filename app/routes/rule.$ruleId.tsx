import { useParams } from '@remix-run/react'
import { Header } from './rule/header'
import { Button } from '~/components/global/button'
import Conditions from './rule/conditions'
import Actions from './rule/actions'
import { useEffect, useState } from 'react'
import { SelectOption } from '~/components/global/select/select'
import { getRuleById } from '~/api/rules'
import RuleLayout from './rule/layout'

export interface IRule {
  id: number
  conditionIds: string[]
  conditions: SelectOption[]
  documents: SelectOption[]
  actionIds: string[]
  schoolId: number
  created_at: string
  updated_at?: string | null
  trigger: string
}

export default function Rule() {
  const { ruleId } = useParams()
  const [rule, setRule] = useState<IRule | null>(null)
  useEffect(() => {
    const fetchRule = async (id) => {
      try {
        const { data } = await getRuleById(id)
        setRule(data)
      } catch (error) {
        console.error('Error fetching rule:', error)
      }
    }

    fetchRule(ruleId)
  }, [ruleId])

  return rule ? <RuleLayout rule={rule} /> : <span>no rule found</span>
}
