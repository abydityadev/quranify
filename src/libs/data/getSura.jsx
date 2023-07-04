export default async function getSura() {
  const response = await fetch('https://api.equran.id/api/v2/surat', {
      cache: 'no-cache'
  })
  const data = await response.json()
  return data
}