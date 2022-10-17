//need to use the body element to change the color
//need to change colors based on mouse hover
//addEventListener('mousemove', (event) => {});
console.log(window.innerWidth)
console.log(window.innerHeight)
//use r g b colors

//let mouse = document.getElementById("#img");
document.addEventListener("mousemove", function (event) {
   const r = Math.round(event.pageX * 255 / window.innerWidth); //should give number between 0 and 255 to associate these numbers with r g b values)
   const b = Math.round(event.pageY * 255 / window.innerHeight);
   const color = `rgb(${r}, 0, ${b})`;
   document.body.style.backgroundColor = color;
})
// function mouseChanger(color) {
//    mouse.style.backgroundColor = color;
// }
// mouse.addEventListener("mouseover", function (e) {
//     mouseChanger("black");
// })
