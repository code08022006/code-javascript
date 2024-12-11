const user={
    username:"aditya",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome coder`);
        console.log(this);// this will print currnt context
        
        
    }

}
// // user.welcomeMessage()
// // user.username="sam"
// // user.welcomeMessage()
// // console.log(this);


// function chai(){
//     let usetrname="aditya"
//     console.log(this);//output is undefined
    
// }
// const two= function(){
//     let username="hitesh"
//     console.log(this.username); // output is undefined
    
// }
// two()

///////another way to define function using arrow 
// const three= ()=>{
//     let username="adityaa"
//     console.log(this.username);
    
// }
// three()
const aditya =(num1,num2) => (num1+num2) // if we use ()this then there is no need to write return keyword but if we use {} this then we have to write return keyword
console.log(aditya(2,3));








