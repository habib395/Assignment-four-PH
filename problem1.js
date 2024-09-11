
function calculateTax(income, expenses){
    if(income >= 0 && expenses >= 0 && income >= expenses){
       const different = income - expenses
       const tax = different * 0.2
       return tax
    }else{
        return "Invalid Input"
    }
}


// Test 
// console.log(calculateTax(10000, 3000))
// console.log(calculateTax(34000, 1753))
// console.log(calculateTax(5000, 1500))
// console.log(calculateTax(7000, 7000))
// console.log(calculateTax(-5000, 2000))
// console.log(calculateTax(6000, -1500))