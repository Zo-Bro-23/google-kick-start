let N = parseInt(testCase[0])
let ratings = testCase[1].split(' ')
let mentors = []
for (studentIndex in ratings) {
    const student = ratings[studentIndex]
    let mentorRating = -1
    for (mentorIndex in ratings) {
        const mentor = ratings[mentorIndex]
        if (studentIndex != mentorIndex) {
            if (mentor <= (2 * student)) {
                if (mentor > mentorRating) {
                    mentorRating = mentor
                }
            }
        }
    }
    mentors.push(mentorRating)
}
console.log(`Case #${input.indexOf(testCase) + 1}: ${mentors.join(' ')}`)