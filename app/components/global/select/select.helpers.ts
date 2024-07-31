import { SelectOption } from '~/components/global/select/select'

function getFirstUnusedOption(
  currentOptions: SelectOption[],
  allOptions: SelectOption[]
): SelectOption {
  const currentValues = currentOptions.map((o) => o.value)
  const allValues = allOptions.map((o) => o.value)
  const unusedValues = allValues.filter((v) => !currentValues.includes(v))
  const firstUnusedOption = allOptions.find((o) => o.value === unusedValues[0])
  if (!firstUnusedOption) {
    throw new Error('No unused options found')
  }

  return firstUnusedOption
}

export default {
  getFirstUnusedOption,
}
