input.forEach(testCase => {
    let NDCM = testCase[0].split(' ')
    let N = parseInt(NDCM[0])
    let D = parseInt(NDCM[1])
    let C = parseInt(NDCM[2])
    let M = parseInt(NDCM[3])
    let S = testCase[1]
    let rest = S

    for (let i = 0; i < S.length; i++) {
        if (i == S.length - 1) {
            console.log(`Case #${input.indexOf(testCase) + 1}: YES`)
        }
        if (S.charAt(i) == 'C') {
            if (C == 0) {
                if (rest.includes('D')) {
                    console.log(`Case #${input.indexOf(testCase) + 1}: NO`)
                    break
                } else {
                    console.log(`Case #${input.indexOf(testCase) + 1}: YES`)
                    break
                }
            } else {
                C--
                rest = S.slice(i)
            }
        } else {
            if (D == 0) {
                if (rest.includes('D')) {
                    console.log(`Case #${input.indexOf(testCase) + 1}: NO`)
                    break
                } else {
                    console.log(`Case #${input.indexOf(testCase) + 1}: YES`)
                    break
                }
            } else {
                D--
                C += M
                rest = S.slice(i)
            }
        }
    }
})