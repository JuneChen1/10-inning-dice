let tigerWinCount = 0
let bearWinCount = 0
let tieCount = 0

for (let i = 1; i <= 10; i++) {
  let tigerPoint = Math.floor(Math.random() * 6) + 1
  let bearPoint = Math.floor(Math.random() * 6) + 1
  let result = ''

  if (tigerPoint > bearPoint) {
    tigerWinCount++
    result = '本局虎哥勝'
  } else if (bearPoint > tigerPoint) {
    bearWinCount++
    result = '本局熊弟勝'
  } else {
    tieCount++
    result = '本局平局'
  }
  console.log(`第${i}局|虎哥${tigerPoint}點 vs 熊弟${bearPoint}點|${result}`)
}

console.log('--- 結果 ---')
console.log(`虎哥贏${tigerWinCount}局\n熊弟贏${bearWinCount}局\n平局${tieCount}局`)

if (tigerWinCount > bearWinCount) {
  console.log('最終冠軍：虎哥')
} else if (bearWinCount > tigerWinCount) {
  console.log('最終冠軍：熊弟')
} else {
  console.log('最終結果：平局')
}