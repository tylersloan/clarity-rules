import { Button } from '~/components/global/button'
import { Header } from '~/routes/rule/header'
import { useEffect, useState } from 'react'
import Conditions, { CONDITIONS_OPTIONS } from '~/routes/rule/conditions'
import Actions, { DOCUMENTS_OPTIONS } from '~/routes/rule/actions'
import ruleHelpers from '~/routes/rule/rule.helpers'
import { Form } from '@remix-run/react'
import RuleLayout from './rule/layout'

// function fetchOptions() {
//   return Promise.resolve({ c: CONDITIONS_OPTIONS, d: DOCUMENTS_OPTIONS })
// }
export default function Rules() {
  // useEffect(() => {
  //   fetchOptions().then(({ c, d }) => {
  //     setConditions(c)
  //     setDocuments(d)
  //   })
  // }, [])

  return (
    <RuleLayout
    // conditions={conditions}
    // documents={documents}
    // setConditions={setConditions}
    // setDocuments={setDocuments}
    // handleCancel={handleCancel}
    // handleSave={handleSave}
    />
  )
}
