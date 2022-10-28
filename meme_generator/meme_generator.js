const topSubmission = document.querySelector("#top-form");
const bottomSubmission = document.querySelector("#bottom-form");
const memeImageInput = document.querySelector("#url-input")
const completedForm = document.querySelector("form");
const memeLand = document.querySelector("#meme-land");

//add multiple memes to the page --DONE
//add button that removes a meme from the page --DONE
//form reset values when form submitted --DONE

completedForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    let memeImage = document.createElement("img");
    memeImage.src = memeImageInput.value;
    let memeDiv = document.createElement("div");
    
    let topImageDiv = document.createElement("div");
    let topImageText = document.createTextNode("");
    topImageText = topSubmission.value;
    topImageDiv.append(topImageText);
   
    let bottomImageDiv = document.createElement("div");
    let bottomImageText = document.createTextNode("");
    bottomImageText = bottomSubmission.value;
    bottomImageDiv.append(topImageText);
    
    let removeBtn = document.createElement("button");
    let btnText = document.createTextNode("Remove This Meme");
    btnText.class = "form-text";
    removeBtn.appendChild(btnText);
    
                memeLand.append(memeDiv);
                memeDiv.append(memeImage);
                memeLand.append(topImageText, bottomImageText, removeBtn);

    completedForm.reset();

    removeBtn.addEventListener("click", function(e) {
        memeDiv.remove(); //this one works
        topImageDiv.remove();
        bottomImageDiv.remove();
        removeBtn.remove(); //this works
    })

})
//no methods are working on text divs, error throwing saying they're not nodes.