import { fakeRules } from '~/data'
import { CONDITIONS_OPTIONS } from '~/routes/rule/conditions'
import { DOCUMENTS_OPTIONS } from '~/routes/rule/actions'
import { IRule } from '~/routes/rule.$ruleId'

export type ConsAndDocs = Pick<IRule, 'documents' | 'conditions'>
export type NoConsAndDocsOrUpdatedAt = Omit<
  IRule,
  'documents' | 'conditions' | 'updated_at'
>

export function getRules(): Promise<{ data: NoConsAndDocsOrUpdatedAt[] }> {
  return Promise.resolve({ data: fakeRules })
}

export function getRuleById(id: string): Promise<{ data: IRule }> {
  if (!id) {
    return Promise.reject(new Error('No rule id provided'))
  }
  const rule = fakeRules.find((rule) => rule.id === Number(id))
  if (!rule) {
    return Promise.reject(new Error('Rule not found'))
  }

  return Promise.resolve({
    data: transformRule(rule),
  })
}

export async function createRule({
  conditions,
  documents,
}: ConsAndDocs): Promise<NoConsAndDocsOrUpdatedAt> {
  const { data: allRules } = await getRules()
  const newRule = await buildRule({ conditions, documents })
  allRules.push(newRule)
  return Promise.resolve(newRule)
}

export async function saveNewRule({
  documents,
  conditions,
}: Pick<IRule, 'documents' | 'conditions'>) {
  try {
    const response = await createRule({ conditions, documents })
    console.log('Rule saved:', response)
  } catch (error) {
    console.error('Error saving rule:', error)
  }
}

export function updateRule(rule: IRule): Promise<NoConsAndDocsOrUpdatedAt> {
  const index = fakeRules.findIndex((r) => r.id === rule.id)

  if (index === -1) {
    return Promise.reject(new Error('Rule not found'))
  }

  fakeRules[index] = {
    ...fakeRules[index],
    conditionIds: rule.conditions.map((c) => c.value),
    documentIds: rule.documents.map((d) => d.value),
    updated_at: new Date().toISOString(),
  }
  // don't really need to return anything other than status code :shrug:
  return Promise.resolve(fakeRules[index])
}

const transformRule = (
  rule: Omit<IRule, 'conditions' | 'documents'>
): IRule => {
  const transformedRule = {
    ...rule,
    conditions: rule.conditionIds.map((conditionId) => {
      const condition = CONDITIONS_OPTIONS.find(
        (option) => option.value === conditionId
      )
      if (!condition) {
        throw new Error('Condition not found')
      }
      return condition
    }),
    documents: rule.documentIds.map((actionId) => {
      const action = DOCUMENTS_OPTIONS.find(
        (option) => option.value === actionId
      )
      if (!action) {
        throw new Error('Document not found')
      }
      return action
    }),
  }

  return transformedRule
}

const buildRule = async ({
  conditions,
  documents,
}: ConsAndDocs): Promise<NoConsAndDocsOrUpdatedAt> => {
  const { data: allRules } = await getRules()

  return Promise.resolve({
    conditionIds: conditions.map((c) => c.value),
    documentIds: documents.map((d) => d.value),
    id: allRules.length + 1,
    created_at: new Date().toISOString(),
    trigger: 'trigger',
    schoolId: 1,
  })
}
