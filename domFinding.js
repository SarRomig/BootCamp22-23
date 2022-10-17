//1
const container = document.getElementById("container");
//2
let containerWithQuery = document.querySelector("#container"); 
//3
const secondClass = document.getElementsByClassName("second");
//4
const thirdClassOfOl = document.getElementsByClassName("ol .third");
//5 
containerWithQuery.innerText = "Hello!";
//6
const divFooter = document.querySelector(".footer"); 
divFooter.className += " main";
//7
divFooter.classList.remove("main");
//8
const newLi = document.createElement("li");
//9
newLi.innerText = "four";
//10
const unorderedList = document.querySelector("ul");
unorderedList.appendChild(newLi); //coming back null?
//11
const orderedListItems = document.querySelectorAll("ol li");

for (let lis of orderedListItems) {
    orderedListItems.style.backgroundColor = "green";
}
//12
divFooter.remove();