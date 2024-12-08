// singleton
// Object.create
const mySym= Symbol("key1")
const Jsuser={
    name:"aditya",
    "fullName":"Aditya Jadhav",
    [mySym]:"key1",
    age: 18,
    email:"abc@gmail.com",
    isLoggedin:true,
}
console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["fullName"]);
console.log(Jsuser[mySym]);

Jsuser["email"]="aditya@chatgpt.com"
// Object.freeze(Jsuser)
console.log(Jsuser);


Jsuser.greeting=function(){
    console.log("hello world");
}
Jsuser.greetingTwo=function(){
    console.log(`Hello JS user ${this.fullName}`);//if you mention same name of object before the .greetingtwo
    
}

console.log(Jsuser.greeting())
console.log(Jsuser.greetingTwo());










