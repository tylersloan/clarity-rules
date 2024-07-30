import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons'
import * as SelectPrimitive from '@radix-ui/react-select'
import { Button } from '../button'

type SelectProps = {}

const CONDITIONS_ARRAY = [
  { value: 0, label: 'Family Status is New' },
  { value: 1, label: 'Family Status is Returning' },
  { value: 2, label: 'Is Business Owner' },
  { value: 3, label: 'Family did not file US Taxes' },
]

const Select = (props: SelectProps) => {
  return (
    <SelectPrimitive.Root defaultValue={'0'}>
      <SelectPrimitive.Trigger asChild aria-label='selectLabel'>
        <Button
          variant='outline'
          color='default'
          justify='between'
          className='w-11/12 max-w-80 font-normal'
        >
          <SelectPrimitive.Value />
          <SelectPrimitive.Icon className='ml-2'>
            <ChevronDownIcon />
          </SelectPrimitive.Icon>
        </Button>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Content>
        <SelectPrimitive.ScrollUpButton className='flex items-center justify-center text-gray-700 '>
          <ChevronUpIcon />
        </SelectPrimitive.ScrollUpButton>
        <SelectPrimitive.Viewport className='bg-white  p-2 rounded-md shadow-dropdownMenu'>
          <SelectPrimitive.Group>
            {CONDITIONS_ARRAY.map(({ value, label }) => {
              return (
                <SelectPrimitive.Item
                  key={`${label}-${value}`}
                  value={value.toString()}
                  className='relative flex items-center px-8 py-2 rounded-md text-sm text-default font-medium focus:bg-gray-100 radix-disabled:opacity-50 focus:outline-none select-none'
                >
                  <SelectPrimitive.ItemText>{label}</SelectPrimitive.ItemText>
                  <SelectPrimitive.ItemIndicator className='absolute left-2 inline-flex items-center'>
                    <CheckIcon />
                  </SelectPrimitive.ItemIndicator>
                </SelectPrimitive.Item>
              )
            })}
          </SelectPrimitive.Group>
        </SelectPrimitive.Viewport>
        <SelectPrimitive.ScrollDownButton className='flex items-center justify-center text-gray-700 '>
          <ChevronDownIcon />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Root>
  )
}

export default Select
