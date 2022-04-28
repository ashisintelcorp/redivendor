let arr = [/* '12:00 AM', '12:10 AM' */]


let mins = 60 * 24
let minGap = 10
let i = 0
while (minGap * i < mins) {
    let m = i * minGap
    let a = m >= 720 ? 'PM' : 'AM'
    let timeX = m / 60
    let timeY = m % 60

    if (a == 'PM' && timeX >= 13) timeX = timeX - 12
    timeX = Math.floor(timeX)

    arr.push(timeX + ':' + timeY.toFixed(2) + ' ' + a)
    i++
}

console.log(arr)