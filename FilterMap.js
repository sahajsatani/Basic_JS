const arr = [4,6,3,2,34,4,656,34];
const arr2 = arr.filter((item) => item>5);
// console.log(arr2);

const user = [
    {name : "sahaj", rno:45},
    {name : "saaj", rno:45},
    {name : "shaj", rno:45}
]
const user2= user
.filter((obj)=>obj.name==="sahaj")
.map((item) => item.rno += 10 );
// console.log(user2);

const arr3 = arr.filter((num)=> num > 5 ).map((num) => num += 10);
// console.log(arr3);

const array = [1,2,3,4,5];
// const total = array.reduce(function (acc,curr) {
//     return acc * curr;
// },1);
const total = array.reduce((acc,curr) => (acc + curr),1);

// console.log(total);

const sum = user.reduce((acc,sum) => acc+sum.rno,0);
console.log(sum);

