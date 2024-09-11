function calculateTax(income, expenses){
    if(income >= 0 && expenses >= 0 && income >= expenses){
       const different = income - expenses
       const tax = different * 0.2
       return tax
    }else{
        return "Invalid Input"
    }
}

function sendNotification(email) {
    if(!email.includes("@")){
       return "Invalid Email"
    }
   const name = email.split("@")
   const domain = name[0]
   const userName = name[1]
   const result = domain + " sent you an email from " + userName
   return result
}

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

function calculateFinalScore(obj) {
        if( typeof obj !== 'object' || typeof obj.name !== 'string' || typeof obj.testScore !== 'number' || typeof obj.schoolGrade !== 'number' || typeof obj.isFFamily !== 'boolean' || obj.testScore > 50 || obj.schoolGrade > 30 ){
            return "Invalid Input"
        }
        const testScore = obj.testScore
        const schoolGrade = obj.schoolGrade
        let parentProfession = obj.isFFamily
        if(obj.isFFamily === true){
             parentProfession = 20
        }else if (obj.isFFamily === false){
             parentProfession = 0
        }
        const FinalScore = testScore + schoolGrade + parentProfession
        if(FinalScore >= 80){
            return "true"
        }else{
            return "false"
        }
}

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


