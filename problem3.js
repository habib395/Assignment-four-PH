function checkDigitsInName(name){
let named = name.toString();

if(typeof named !== "string"){
    return "Invalid Input"
}
    for(const num of name){
        if(typeof isNaN(num[0]) !== 'number'){
            return true
        }else{
            return false
        }
    }
}
// test
console.log(checkDigitsInName("Raj"))
// console.log(checkDigitsInName("Sumon"))
// console.log(checkDigitsInName("Name2024"))
// console.log(checkDigitsInName("!@#"))
// console.log(checkDigitsInName(["Raj"]))