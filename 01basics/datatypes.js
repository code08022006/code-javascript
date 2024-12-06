// //primtive 
// // strings,numbers,boolean,null,undefined,symbol,BigInt

// // symbol in js is same as id in css 
// const id=Symbol('123');
// const isId=Symbol('123');
// console.log(id===isId);
// const scoreorder=2345568690503n;

// //refernence/nonprimitive
// // arrays,objects ,functions

// const heros=["shaktiman","nagraj","ironman"];
// let myObj={
//     name:"aditya",
//     age:23,
// }

// const myFunction=function(){
//     console.log("hello world");
    

// }


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack(primitive) heap(non-primitive)
let myuser="hitesh rana";
let you=myuser;
you="aditya jadhav";
console.log(myuser);
console.log(you);

let user={
    email: "user@gmail.com",
    upi:"ok@sbi",

}
let user2=user;


user.email="aditya@gmail.com"
console.table([user,user2]);



