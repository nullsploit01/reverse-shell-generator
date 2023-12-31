export const downloadTextFile = (text: string, filename: string) => {
  const element = document.createElement('a')
  const file = new Blob([text], { type: 'text/plain' })
  element.href = URL.createObjectURL(file)
  element.download = `${filename}.txt`
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}

export const generateRandomId = () => {
  return Math.random().toString(36).substring(2, 15)
}
