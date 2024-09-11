function checkDigitsInName(name){

if(typeof name !== "string"){
    return "Invalid Input"
}

    for(const num of name){
       if (!isNaN(num)){
        return true
       }
    }
    return false
    
}
// test
console.log(checkDigitsInName("Raj123"))
console.log(checkDigitsInName("Sumon"))
console.log(checkDigitsInName("Name2024"))
console.log(checkDigitsInName("!@#"))
console.log(checkDigitsInName(["Raj"]))