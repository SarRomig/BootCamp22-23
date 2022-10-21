const form = document.querySelector("form");
const toDoList = document.getElementById("list-items-go-here");
const storedListItem = JSON.parse(localStorage.getItem("forminput"));
const formInput = document.querySelector("#list-submission");

// if (formInput) {
//     listItem.innerText = storedListItem;
// }

// function toDoLabel (item) {
//     //need to identify the emoji (class="material-symbols-outlined") and pair that with the form submission based on whether or not it's associated radio button is checked.


form.addEventListener("submit", function (event) {
    event.preventDefault();
    const listItem = document.createElement("li");
    listItem.id = "list-items-go-here";
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

    const icon = document.querySelectorAll(".material-symbols-outlined");
    const radioBtn = document.querySelector(".radio-button");
    for (let icons of form) {
    if (radioBtn.checked === true) {
        listItem.prepend(icon);
    }
}

    toDoList.append(listItem);
    // saveToLocalStorage();
    form.reset();
});


// const saveToLocalStorage = function() {
//     localStorage.setItem("forminput", JSON.stringify(listItem));
// }
