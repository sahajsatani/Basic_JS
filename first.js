// console.log("sahaj");   
// let accnumber = 120
// const nam = "sahaj"
// var des = "surat"
// let city
// console.table([accnumber,nam,des,city])

const { log } = require("console");
const { Hash } = require("crypto");
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
    course: "BCA",
    age: 20
}
let obj2 = {
    cname: "MCA",
    old: 21
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
    // let num1 = "sahaj"
    // function allScoping() {
    //     console.log(num1);
    // }
    // allScoping();


    // let a = 10;
    // const b = 30;
    // var c = 40;
    // if(true){
    //     let a = 100;
    //     const b = 300;
    //     var c = 400;
    // }
    // console.log(a);
    // console.log(b);
    // console.log(c);


    // addOne(1)
    // const addOne = function(num){
    //     console.log(num+1);
    // }
    // addOne(1)

    // addTwo(2);
    // function addTwo(num){
    //     console.log(num+2);
    // }

    // console.log(this);

    // const temp = (num) => {
    //     return num*num;
    // }
    // console.log(temp(12));

    // const dis = (no) => (no*2);
    // // const dis = (no) => no*2;
    // console.log(dis(2));

    // const ok = (nam) => ({ur:`${nam}`});
    // console.log(ok);
    // let res = ok;
    // console.log(res.ur);


// (function ok() { console.log("sahaj") })(); //';' required for next code running
// (function add(num1, num2) {
//     console.log(num1 + num2);
// })(10, 20);
// ( (num1,num2) => { console.log(num1+num2) } )(10,20);

// Falsy Values
// BigInt 0n = return false
// if( false || 0 || -0 || NaN || null || undefined || 0n ){
//     console.log("flase");
// }
// else{
//     console.log("true");
// }

// Truly Values
// if("0" && 'false' && " " && [] && {} && function(){}){
//     console.log(true);
// }

// let arr = [];
// let obj = {};
// if(arr.length === 0){
//     console.log("Empty");
// }
// if(Object.keys(obj).length === 0){
//     console.log("Empty");
// }

// false==0
// false==''
// 0==''


// Nullish Coaleshing Operator (??) : null, undefind
// let val = 10 ?? 20 //10
// val = null ?? 10 ?? 20 //10
// val = undefined ?? 20 ?? 30 //20
// val = null ?? undefined ?? 40 //40
// console.log(val);

// const arr = [1,2,4,5,6]
// for(const num in arr){
//     console.log(num);
// }

const map = new Map();
map.set(1,"sahaj");
map.set(3,"ok");
map.set(5,"India");
// for(const key in map){
//     console.log(key);
// }
// for(const [key,val] of map){
//     console.log(key+val);
// }

// const obj = {
//     js:"sahaj",
//     oop:56
// }
// for(const key in obj){
//     console.log(`${key} - `+obj[key]);
// }