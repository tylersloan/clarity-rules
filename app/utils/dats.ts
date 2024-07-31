export const formatDate = (isoDateString: string) => {
  const date = new Date(isoDateString)

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  } as const

  return date.toLocaleDateString('en-US', options)
}
