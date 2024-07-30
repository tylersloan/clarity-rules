interface InputProps {
  type?: string
  placeholder: string
}

export function Input({ type = 'text', placeholder }: InputProps) {
  return (
    <input
      type={type}
      className='w-full form-field form-field-focus bg-white text-default border-[1px] border-[#E3E2E5] shadow-[0_1px_4px_0_#F2EFF6CC_inset] px-4'
      placeholder={placeholder}
    />
  )
}
