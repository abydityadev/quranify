export default async function getSura() {
  const response = await fetch('https://equran.id/api/v2/surat', {
      cache: 'no-cache'
  })
  const data = await response.json()

  if (!response.ok) {
    console.log('nay')
  }

  return data
}
