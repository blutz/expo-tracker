const METRO_API = 'https://cors.io/?https://api.metro.net'
const DIRECTIONS = {
  '806_0_var0': 'Los Angeles',
  '806_1_var1': 'Santa Monica',
}
fetch(`${METRO_API}/agencies/lametro-rail/routes/806/stops/80134/predictions/`)
  .then(res => res.json())
  .then(updatePage)
  .catch(couldntUpdate)

function couldntUpdate(reason) {
  // TODO: Do something reasonable
  window.alert("Couldn't update now.")
  console.error(reason)
}

function updatePage(predictions) {
  let toSM = []
  let toLA = []
  for (item of predictions.items) {
    if(item.run_id === '806_0_var0') {
      toLA.push(item.minutes)
    } else if (item.run_id === '806_1_var1') {
      toSM.push(item.minutes)
    }
  }
  toSM.sort((a, b) => a - b)
  toLA.sort((a, b) => a - b)
  console.log(toSM)
  console.log(toLA)

  let addMin = (item) => item + ' min'

  let toSMWords = toSM.map(addMin)
  let toLAWords = toLA.map(addMin)

  console.log(toSMWords)
  console.log(toLAWords)

  let toSMString = toSMWords.join(', ')
  let toLAString = toLAWords.join(', ')
  console.log(toSMString)
  console.log(toLAString)

}
