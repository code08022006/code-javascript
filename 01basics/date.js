let myDate=new Date();// this will print today's date
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());//It will print date and time also
// console.log(myDate.toLocaleTimeString()); // It will print only time
console.log(myDate.toDateString()); //
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

let createdDate=new Date(2024,0,23,3,4); // in javascript months start with 0
// console.log(createdDate.toLocaleString());
// let newDate=new Date("2023-08-08");
// console.log(newDate.toDateString());

//++++++++++++++++timestamp+++++++++++++++
let myTimestamp=Date.now();
// console.log(myTimestamp); // output is larger value which is the millesecond from jan 1970
// console.log(createdDate.getTime());
// console.log(Math.floor(Date.now()/1000));//to convert millisecond to second
let date=new Date(); // this will print todays date
console.log(date.getFullYear());
console.log(date.getMonth()+1); // the output of this is month number-1 because month starts from zero in js
console.log(date.toLocaleString( 'default',{
    weekday:"long",
    day: "numeric"
}))















