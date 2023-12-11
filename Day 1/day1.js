// import { input } from "./input";

const testArray = ["1243khj234","3lkj6h34kjl","6345jk7h5"];

const firstAndLastDigit = (string) => {
    let intArray = []
    for(const x of string) {
        if(!isNaN(x)) {
            intArray.push(x)
        }
    }
    let ans = parseInt(intArray[0]) + parseInt(intArray[intArray.length-1])
    return ans
}

let ans = 0;
for(let i = 0; i < testArray.length; i++){
    const temp = firstAndLastDigit(testArray[i])
    ans += temp
}
console.log(ans)