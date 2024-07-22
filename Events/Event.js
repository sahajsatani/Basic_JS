const outerDiv = document.querySelector(".outer");
const list = document.querySelectorAll(".list");

// outerDiv.addEventListener("click", (e)=>{
//     // e.stopPropagation();
//     console.log("outerdiv execute");
// },false);
// list.forEach((list) => {
//     list.addEventListener("click", (e)=>{
//     console.log("list clicked");
//     })
// },false);

// list.forEach((list) => {
//     list.addEventListener("click", (e)=>{
//     console.log(e.target.parentNode);
//     let temp = e.target;
//     temp.remove();
//     })
// });

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
let objInterval;
start.addEventListener("click", (e) => {
  if(objInterval==null){objInterval = setInterval(() => {
    document.body.style.backgroundColor = getColor();
  }, 1000);}
});

function getColor(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i=0; i<6; i++)
        color += hex[Math.floor(Math.random()*10)];
    return color;
}

function getRandom(){
  return Math.floor(Math.random() * 1000);
};

stop.addEventListener("click", (e) => {
  clearInterval(objInterval);
//   objInterval = null;
});
