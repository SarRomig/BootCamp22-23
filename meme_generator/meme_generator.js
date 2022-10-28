const topSubmission = document.querySelector("#top-form");
const bottomSubmission = document.querySelector("#bottom-form");
const memeImageInput = document.querySelector("#url-input")
const completedForm = document.querySelector("form");
const memeLand = document.querySelector("#meme-land");

//add multiple memes to the page
//add button that removes a meme from the page
//form reset values when form submitted

completedForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    let memeImage = document.createElement("img");
    memeImage.src = memeImageInput.value;
    let memeDiv = document.createElement("div");
    
    let topImageText = document.createElement("div");
    // topImageText.id("top-text");
    topImageText = topSubmission.value;
   
    let bottomImageText = document.createElement("div");
    // bottomImageText.id("bottom-text");
    bottomImageText = bottomSubmission.value;
    
    let removeBtn = document.createElement("button");
    let btnText = document.createTextNode("Remove This Meme");
    btnText.class = "form-text";
    removeBtn.appendChild(btnText);
    
    let memeCount = 0;
    for (memeCount = 1; memeCount <= 1; memeCount++) {
                memeLand.append(memeDiv);
                memeDiv.append(memeImage);
                memeLand.append(topImageText, bottomImageText, removeBtn);
    }
    completedForm.reset();

    removeBtn.addEventListener("click", function(e) {
        memeDiv.remove();
        memeLand.removeChild(topImageText, bottomImageText, removeBtn);
    })

})
//no methods are working on text divs, error throwing saying they're not nodes.