// console.log("sahaj");   
// let accnumber = 120
// const nam = "sahaj"
// var des = "surat"
// let city
// console.table([accnumber,nam,des,city])

const { log } = require("console");
const { skip } = require("node:test");

  
// const game = "super";
// // console.log(game.__proto__);
// console.log(game.slice(-1,10));

// const temp = "hi how are you!"
// console.log(temp.replace("how",true));
// let num = 123.45;
// console.log(num.toFixed(1));
// console.log(num.toPrecision(4));
// let temp = 897656;
// console.log(temp.toLocaleString('en-IN'));

// let temp = Math.random();
// let min=10;
// let max=30;
// console.log(Math.floor(temp * (max-min+1))+min);


// let arr = [10,20,30,[1,2,3],90,[11,12,13,[101,102]]];
// let temp = arr.flat();
// console.log(temp);

// console.log(Array.isArray("ok"));
// let temp = Array.from("sahaj");
// console.log(temp);

// let arr = Array.of({nam:"sahaj"});
// console.log(arr);


// const skin = Symbol("ok");
// let obj  = {
//     sname:"satani",
//     age:19,
//     male:true,
//     height:5.6,
//     [skin]:"brown"
// }

// obj.age = 20;
// console.log("Before "+obj["age"]);
// Object.freeze(obj.age);
// console.log("After "+obj.age);

// console.log(obj[skin]);


// obj.gretting = function(){
//     console.log("Good Afternoon !!");
// }
// obj.gretting();


let obj1 = {
    course:"BCA",
    age:20
}
let obj2 = {
    cname:"MCA",
    old:21
}
// let obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);
// console.log(obj1);

// let obj3 = {...obj1,...obj2};
// console.log(obj3);

// console.log(obj1==obj3);

// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1));

// console.log(obj1.hasOwnProperty("age"));

// const {cname} = obj2;
// console.log(cname);

// let {old:age} = obj2;
// console.log(age);

// const temp = ({cname:nam}) =>{
//     console.log(nam);
// }
// temp({cname} = obj2);
// temp(cname = "sahaj");

// console.log(temp(90,"ok"));
// function temp(num1, num2){
//     // console.log(num1+num2);
//     return num1+num2;
// }

// function makeString(nam){
//     if(nam){
//         return `My name is ${nam}`;
//     }
//     else{
//         return `My name is ok`;
//     }
// }
// let na = "sahaj";
// console.log(makeString(na));


// Rest parameter must be last of para.
// function calculateSumMark(num1,...mark){
//     let sum=0;
//     for(let i=0; i<mark.length; i++){
//         sum += mark[i];
//     }
//     // console.log(tt);
//     return sum;
// }
// console.log(calculateSumMark(10,20,30,50));

// const profile = {
//     sname : "satani",
//     member : 12
// }
// function printObject(anyObject){
//     console.log(`Hello ${anyObject.sname} with ${anyObject.member} Tnk`);
// }
// printObject(profile);
let num1 = "sahaj"
function allScoping() {
    console.log(num1);
}
allScoping();