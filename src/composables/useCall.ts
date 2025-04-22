export function useUser() {
  function myFormTeleg(name: string, phoneNumber: string) {
    const xhr = new XMLHttpRequest()
    const url = new URL(
      'https://api.telegram.org/bot6238463059:AAFbuOgVxnYP9x59fphDCVhdgkjvTltF2P0/sendMessage',
    )
    xhr.open('POST', url)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.responseType = 'json'

    const requestList = JSON.stringify({
      chat_id: '@akeramzit',
      text: `Имя клиента: ${name}\nНомер телефона: ${phoneNumber}`,
    })
    if (name && phoneNumber) {
      xhr.send(requestList)
    }
  }
  return {
    myFormTeleg,
  }
}
