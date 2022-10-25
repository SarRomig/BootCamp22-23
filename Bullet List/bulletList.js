const form = document.querySelector("form");
const toDoList = document.getElementById("list-items-go-here");
const storedListItem = JSON.parse(localStorage.getItem("forminput"));
const formInput = document.querySelector("#list-submission");
let storedList = []; //doing this every time it refreshes so it's getting rid of previous stored items from previous refresh


// function toDoLabel (item) {
//     //need to identify the emoji (class="material-symbols-outlined") and pair that icon with the form submission based on whether or not it's associated radio button is checked.

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const listItem = document.createElement("li");
    listItem.id = "list-items";
    listItem.innerText = formInput.value;

    listItem.addEventListener("click", function (event) {
        if (listItem.style.textDecoration === "none") {
            listItem.style.textDecoration="line-through";
        }
        else {
            listItem.style.textDecoration = "none";
        }
    })

    listItem.addEventListener("dblclick", function(event){
        listItem.remove();
    })
 //on click, need to find that value in localStorage and change it to false for line-through and true for none



    // const billButton = document.querySelector("#bill");
    // const billIcon = document.querySelector("#bill-icon")
    // const phoneButton = document.querySelector("#phone");
    // const phoneIcon = document.querySelector("#phone-icon")

    // const questionButton = document.querySelector("#question");
    // const questionIcon = document.querySelector("#phone-icon")

    // const homeButton = document.querySelector("#home");
    // const homeIcon = document.querySelector("#home-icon")

    // const emailButton = document.querySelector("#email");
    // const emailIcon = document.querySelector("#email-icon")

    // const errandButton = document.querySelector("#errand");
    // const errandIcon = document.querySelector("#errand-icon")

    // for (let icons of form) {
    // if (billButton.checked === true) {
    //     listItem.prepend(billIcon);
    //     billButton.createElement(billIcon);
    // }
    // else if (phoneButton.checked === true) {
    //     listItem.prepend(phoneIcon);
    // }
    // //this makes the icon go away at top... need to keep them there and add them to list.
    
    // }
    let storageObject = {
        toDoInfo: formInput.value,
        toDoStatus: true,
    }
    storedList.push(storageObject);
    localStorage.setItem("storedList", JSON.stringify(storedList))

    toDoList.append(listItem);
    form.reset();
});

function getFromLocalStorage() {
    let todos = [];
    const reference = localStorage.getItem('storedList');
    // if reference exists
    if (reference) {
      // converts back to array and store it in todos array
      todos = JSON.parse(reference);
    }
    return todos;
    };

console.log(getFromLocalStorage());

for (let items of getFromLocalStorage()) {
    const listItem = document.createElement("li");
    listItem.id = "list-items";
    listItem.innerText = items.toDoInfo;

    if (!items.toDoStatus) {
        listItem.style.textDecoration = "line-through";
    }

    toDoList.append(listItem);
};