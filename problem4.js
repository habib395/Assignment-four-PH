
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

const properties ={ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  } 
const count = calculateFinalScore(properties)
console.log(count)