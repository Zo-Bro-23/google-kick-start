const N = parseInt(testCase[0])
let cells = []
for (let i = 0; i < N; i++) {
    cells.push('W')
}
cells = cells.join('')
function turn(cells) {
    for (let i = 0; i < cells.length; i++) {
        if (i == 0 && i == cells.length - 1) {
            if (cells.charAt(i) == 'W') {
                return i
            }
        } else if (i == 0) {
            if (cells.charAt(i) == 'W' && cells.charAt(i + 1) == 'W') {
                return i
            }
        } else if (i == cells.length - 1) {
            if (cells.charAt(i) == 'W' && cells.charAt(i - 1) == 'W') {
                return i
            }
        } else {
            if (cells.charAt(i) == 'W' && cells.charAt(i + 1) == 'W' && cells.charAt(i - 1) == 'W') {
                return i
            }
        }
    }
    return -1
}
let bot = true
let botScore = 0
while (turn(cells) !== -1) {
    const index = turn(cells)
    cells = cells.substring(0, index) + 'R' + cells.substring(index + 1)
    if (bot) {
        botScore++
    }
    bot = !bot
}
console.log(`Case #${input.indexOf(testCase) + 1}: ${botScore}`)