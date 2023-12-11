const input = require('./input')

const firstAndLastDigit = (string) => {
    let intArray = []
    for(const x of string) {
        if(!isNaN(x)) {
            intArray.push(x)
        }
    }
    let ans
    if(intArray.length > 1) {
        ans = intArray[0] + intArray[intArray.length-1]
    } else {
        ans = intArray[0] + intArray[0]
    }
    return parseInt(ans)
}

let ans = 0;
for(let i = 0; i < input.array.length; i++){
    const temp = firstAndLastDigit(input.array[i])
    ans += temp
}

console.log(ans)