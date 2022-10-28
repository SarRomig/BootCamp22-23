const form = document.querySelector("form");
const toDoList = document.getElementById("list-items-go-here");
const formInput = document.querySelector("#list-submission");

document.addEventListener("DOMContentLoaded", getFromLocalStorage);

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const listItem = document.createElement("li");
    listItem.id = "list-items";
    let toDoText = formInput.value;
    listItem.innerText = toDoText;
    saveToDos(toDoText);


    listItem.addEventListener("click", function (event) {
        if (listItem.style.textDecoration === "none") {
            listItem.style.textDecoration="line-through";
            completedToDos(toDoText);
        }
        else {
            listItem.style.textDecoration = "none";
        }
    })

    listItem.addEventListener("dblclick", function(event){
        listItem.remove();
        removeLocalToDos(toDoText);
    })

    toDoList.append(listItem);
    form.reset();
});

function saveToDos (todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    console.log(todos)
    localStorage.setItem("todos", JSON.stringify(todos));
}


function getFromLocalStorage() {
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
    todos = JSON.parse(localStorage.getItem("todos"));
    let completedToDos;
    if(localStorage.getItem("completedToDos") === null) {
        completedToDos = [];
    }
    else{
        completedToDos = JSON.parse(localStorage.getItem("completedToDos"));
    }

    //load completed todos
    completedToDos.forEach(function(todo){
        const listItem = document.createElement("li");
        listItem.id = "list-items";
        listItem.innerText = todo;
    
         listItem.addEventListener("click", function (e) {
                if (listItem.style.textDecoration === "none") {
                    listItem.style.textDecoration="line-through";
                }
                else {
                    listItem.style.textDecoration = "none";
                }
            })
        
        listItem.addEventListener("dblclick", function(event){
                listItem.remove();
                removeLocalToDos (todo);
            })
            toDoList.append(listItem);
        })
    }

    todos.forEach(function (todo) {
    const listItem = document.createElement("li");
    listItem.id = "list-items";
    listItem.innerText = todo;

     listItem.addEventListener("click", function (e) {
            if (listItem.style.textDecoration === "none") {
                listItem.style.textDecoration="line-through";
            }
            else {
                listItem.style.textDecoration = "none";
            }
        })
    
    listItem.addEventListener("dblclick", function(e){
            listItem.remove();
            removeLocalToDos (todo);
        })
        toDoList.append(listItem);
        form.reset();
    })
}


function removeLocalToDos (todo) {
    let todos;
    if (localStorage.getItem("todos") === null) { //can create function for this but copying and pasting for now
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    const removedToDo = todos.indexOf(todo); //searching for that element in the array in order to splice that element from the localStorage array
    todos.splice(removedToDo, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function completedToDos (todo) {
    let completedToDos
    let todos;
    //check if we already have completedToDos and todos
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    if (localStorage.getItem("completedTodos") === null) {
        completedToDos = [];
    }
    else {
        completedToDos = JSON.parse(localStorage.getItem("completedTodos"));
    }
    //if element doesn't exist
    if (!completedToDos.includes(todo)){
        completedToDos.push(todo);
        localStorage.setItem("completedToDos", JSON.stringify(completedToDos));
        //delete from the other stored todos
        const removedToDo = todos.indexOf(todo); //searching for that element in the array in order to splice that element from the localStorage array
        todos.splice(removedToDo, 1);
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    else {
        //send completed back to incompleted
        todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(todos));
    }
}
    
// function toDoLabel (item) {
//     //need to identify the emoji (class="material-symbols-outlined") and pair that icon with the form submission based on whether or not it's associated radio button is checked.
// console.log(getFromLocalStorage());

// for (let items of getFromLocalStorage()) {
//     const listItem = document.createElement("li");
//     listItem.id = "list-items";
//     listItem.innerText = items.toDoInfo;

//     if (!items.toDoStatus) {
//         listItem.style.textDecoration = "line-through";
//     }

//     toDoList.append(listItem);
// };

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
    // let storageObject = {
    //     toDoInfo: formInput.value,
    //     toDoStatus: true,
    // }
    // storedList.push(storageObject);
    // localStorage.setItem("storedList", JSON.stringify(storedList))