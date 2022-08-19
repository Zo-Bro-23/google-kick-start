const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = [[]]
let variables = 2
let currentVariable = 1
let testCases
let currentTestCase = 1

rl.on('line', (line) => {
    closeReadline()

    if (testCases == undefined) {
        testCases = line
        closeReadline()
        return
    }

    input[currentTestCase - 1].push(line)

    if (currentVariable == variables) {
        currentVariable = 1
        currentTestCase++
        if (currentTestCase - 1 == testCases) {
            rl.close()
        } else {
            input.push([])
        }
    } else {
        currentVariable++
    }
}).on('close', () => {
    problem(input)
})

function closeReadline() {
    if (currentTestCase - 1 == testCases) {
        rl.close()
    }
}

function problem(input) {

}