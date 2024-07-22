// object is called singleton if it is created throgh constuctor
// Object.create = singleton
// const obj = new Object();

// object literals
const sym = Symbol("tempSymbol");

const obj = {
  [sym]: "ok",
  name: "sahaj",
  90: "rkjgn",
};
obj.greeting = function () {
  console.log(`This is Gretting ${this.name}`);
};
Object.freeze(obj); // it used for freez object and we can not modify
console.log(typeof obj[sym]);
console.log(obj[90] + obj["name"]);
console.log(obj.name);
console.log(obj.greeting());

const user = {};
user.id = "pid";
user.detail = {
    first:"sahaj",
    last:"satani",
    gender:{
        male:true,
        female:false
    }
}
// ? mean if we get detail then we go gender otherwise not
const user2 = {id:"sahaj"};
Object.assign(user2,user);
// console.log(user2.detail?.gender.male);
// console.log(user2.id);

const obj3 = {...user, ...obj};// ... spread the object and we can combine it
// console.log(obj3);

// console.log(Object.keys(user2));
// console.log(Object.values(user2));

