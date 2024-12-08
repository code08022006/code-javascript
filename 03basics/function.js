function myName(){
    console.log("H");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("H");
}
// myName()

function addTwonumbers(num1,num2){
    let result = num1+num2;
    return result;
}
// const result=addTwonumbers(2,3);
// console.log("result is : ",result);
function loggedUser(username){
    if(username===undefined){
        console.log("pleaase enter a username");
        return
    }
    return `${username} just logged in`
}

const result1=loggedUser()
console.log(result1);
















