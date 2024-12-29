// for of
myarr=[1,2,3,4,5];
for (const num of myarr) {
    //console.log(num);
    
    
}

const greeetings="Hello World!"
for (const greet of greeetings) {
  //console.log(`Each char is ${greet}`);
    
    
}
const map=new Map();
map.set('IN','India')
map.set('FR','france')
map.set('USA','America')
// maps are iteratable
// console.log(map)
for (const key of map) {
    // if we use only key then we get key value mix array
    console.log(key);
    
}
// maps are iteratable hence we can use this syntax
for (const [key,value] of map) {
    console.log(key ,"-", value);
    
    
}








