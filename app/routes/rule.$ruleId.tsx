import { useParams } from '@remix-run/react'
import { useEffect, useState } from 'react'
import { SelectOption } from '~/components/global/select/select'
import { ConsAndDocs, getRuleById, updateRule } from '~/api/rules'
import RuleLayout from './rule/layout'

export interface IRule {
  id: number
  conditionIds: string[]
  conditions: SelectOption[]
  documents: SelectOption[]
  documentIds: string[]
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

  const handleUpdate = async (rule: IRule) => {
    try {
      await updateRule(rule)
    } catch (error) {
      console.error('Error updating rule:', error)
    }
  }

  return rule ? (
    <RuleLayout rule={rule} handleUpdate={handleUpdate} />
  ) : (
    <span>no rule found</span>
  )
}
