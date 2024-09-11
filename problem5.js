
function  waitingTime(waitingTimes  , serialNumber){
    if(!Array.isArray(waitingTimes) === true || (typeof serialNumber !== 'number')){
        return "Invalid Input"
    }
    const array = waitingTimes
    const serial = serialNumber
    const finished = array.length
    const unfinished = serial - 1 - array.length
    let sum = 0
    for(let num of array){
        sum = sum + num
    }
    const averageTime = Math.round(sum / finished)
    const neededTime = averageTime * unfinished
    return neededTime
}

// console.log(waitingTime( [ 3, 5, 7, 11, 6 ] , 10))
// console.log(waitingTime( [13, 2], 6))
// console.log(waitingTime( [13, 2, 6, 7, 10], 6))
// console.log(waitingTime( [6], 4))
// console.log(waitingTime( 7 , 10))
// console.log(waitingTime( "[6,2]", 9))
// console.log(waitingTime( [7, 8, 3, 4, 5], "9"))