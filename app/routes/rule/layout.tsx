import { useState } from 'react'
import { useNavigate } from '@remix-run/react'
import Actions, { DOCUMENTS_OPTIONS } from './actions'
import Conditions, { CONDITIONS_OPTIONS } from './conditions'
import { Header } from './header'
import { Button } from '~/components/global/button'
import { IRule } from '../rule.$ruleId'
import { ConsAndDocs, saveNewRule } from '~/api/rules'

export default function RuleLayout({
  rule,
  handleUpdate,
}: {
  rule?: IRule | null
  handleUpdate?: (rule: IRule & ConsAndDocs) => void
}) {
  const navigate = useNavigate()
  const [documents, setDocuments] = useState(
    rule?.documents ? rule.documents : [DOCUMENTS_OPTIONS[0]]
  )
  const [conditions, setConditions] = useState(
    rule?.conditions ? rule.conditions : [CONDITIONS_OPTIONS[0]]
  )

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel?')) {
      setDocuments([DOCUMENTS_OPTIONS[0]])
      setConditions([CONDITIONS_OPTIONS[0]])
      navigate('/')
    }
  }
  const handleSave = async () => {
    if (rule && handleUpdate) {
      handleUpdate({ ...rule, documents, conditions })
    } else {
      await saveNewRule({ documents, conditions })
    }
    navigate('/')
  }

  return (
    <>
      <Header
        actions={
          <>
            <Button variant='outline' onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant='solid' onClick={handleSave}>
              Save and Enable Rule
            </Button>
          </>
        }
      />
      <main className='container mt-8 '>
        <form id='rule-form'>
          <Conditions conditions={conditions} setConditions={setConditions} />
          <Actions documents={documents} setDocuments={setDocuments} />
        </form>
      </main>
    </>
  )
}
