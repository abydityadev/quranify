export default async function getSuraDetail(nomor) {
    const response = await fetch(`https://api.equran.id/api/v2/surat/${nomor}`, {
        cache: 'no-cache'
    })
    
    if (!response.ok) {
        console.log('nay')
    } else {
        console.log('yay')
    }

    return response.json()
  }