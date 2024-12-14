const userEmail=[]
if(userEmail){
    console.log("got userEmail");
    
}
else{
    console.log("not got userEmail");

    
}
// falssy value
// undefined,null,0,-0,NAN,BigInt 0n,-0;
// truthy values-
//"0","false",[],{},function(){}," "
// how to check whether the empty object or empty array
//for empty object
if (userEmail.length===0)
{
    console.log("empty array");
    
}
const emptyobject={}
if (Object.keys(emptyobject).length===0)
{
    console.log("empty object");
    
}
// nulish coalising operator ??
let val1;
// val1= 10??15;
// val1=null?? 13
val1 = undefined??24
console.log(val1);























