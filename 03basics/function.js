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

// const result1=loggedUser()
// console.log(result1);
function customerCart(...num1){
    return num1;
} // use this when we want to print multiple values at the same time
// console.log(customerCart(200,300,400,5000));

const user={
    username:"aditya",
    price:199
}
function Handleobject(anyobject){
    console.log(`username is ${anyobject.username} price is ${anyobject.price}`);
    
}
// console.log(Handleobject(user));
const myArray=[200,300,400,500];
function returnsecondArray(getArray){
    return getArray[1];

}
console.log(returnsecondArray(myArray));

//************************interseting */
// function decleration 2 ways 
function addOne(num){
    return num+1;
}
addOne(4)
console.log(addTwo(2))

const addTwo=function(num){
    return num+2
}




































