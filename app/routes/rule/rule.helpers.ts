import { createRule } from '~/api/rules'
import { IRule } from '../rule.$ruleId'

const saveNewRule = async ({
  documents,
  conditions,
}: Pick<IRule, 'documents' | 'conditions'>) => {
  try {
    const response = await createRule({ conditions, documents })
    console.log('Rule saved:', response)
  } catch (error) {
    console.error('Error saving rule:', error)
  }
}

const updateRule = async (rule: IRule) => {
  try {
    const response = await updateRule(rule)
    console.log('Rule updated:', response)
  } catch (error) {
    console.error('Error updating rule:', error)
  }
}

export default {
  saveNewRule,
  updateRule,
}
