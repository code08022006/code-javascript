// const userValue=new Object() // this is a singleton object
const userValue = {}
userValue.name = "samir"
userValue.id = 12345
userValue.isLoggedIn = true
// console.log(userValue);

const regularUser = {
    email: "some@gmail.com",
    userName: {
        fullName: {
            userFullname: {
                firstName: "Aditya",
                lastName: "jadhav"

            }

        }
    }
}
// console.log(regularUser.userName.fullName.userFullname.firstName);
const obj1={1:"a",2:"b"}
const obj2={3:"b",4:"c"}
// const obj3=Object.assign({},obj1,obj2)
// const obj3={...obj1,...obj2}
// console.log(obj3);
const newArr=[
    {
        id:"123",
        email:"aditya@gmail.com"
    },
    {
        id:"123",
        email:"aditya@gmail.com"
    },
    {
        id:"123",
        email:"aditya@gmail.com"
    }
]
// console.log(newArr[1].id);
// console.log(Object.keys(userValue));
// console.log(Object.values(userValue));
// console.log(Object.entries(userValue));// returns key value pair
// console.log(userValue.hasOwnProperty("email"));
// +++++++++++++ de-strurering+++++++++++++++++++
const course={
    courseName:"js in hindi",
    price:"999",
    courseInstructor:"xyz"
}
const{courseInstructor:instructor}=course;
console.log(instructor);
















