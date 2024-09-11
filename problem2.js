
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


// console.log(sendNotification("zihad@gmail.com"))
// console.log(sendNotification("farhan34@yahoo.com"))
// console.log(sendNotification("nadim.naem5@outlook.com"))
// console.log(sendNotification("fahim234.hotmail.com"))
// console.log(sendNotification("sadia8icloud.com"))
