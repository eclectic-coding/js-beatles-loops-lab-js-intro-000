// add solution here
function theBeatlesPlay(musicans, instruments) {
  const arr = []
  
  for (let i = 0, m = musicians.length; i < m; i++) {
    arr.push(`${musicans[i]} plays ${instruments[i]}`)
  }
  
  return arr
  
}