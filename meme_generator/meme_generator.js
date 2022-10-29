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
    memeLand.append(memeDiv);
    memeDiv.appendChild(memeImage);
    memeImage.id = "meme-image";
    memeImage.classList.add("meme-land");
    
    let topImageDiv = document.createElement("div");
    let topImageText = document.createTextNode("");
    topImageText = topSubmission.value;
    topImageDiv.append(topImageText);
    memeDiv.appendChild(topImageDiv);
    topImageDiv.id = "top-text";
    topImageDiv.classList.add("meme-text");
    topImageDiv.classList.add("meme-land");
    
   
    let bottomImageDiv = document.createElement("div");
    let bottomImageText = document.createTextNode("");
    bottomImageText = bottomSubmission.value;
    bottomImageDiv.append(bottomImageText);
    memeDiv.appendChild(bottomImageDiv);
    bottomImageDiv.id = "bottom-text";
    bottomImageDiv.classList.add("meme-text");
    bottomImageDiv.classList.add("meme-land");
    
    let removeBtn = document.createElement("button");
    let btnText = document.createTextNode("Remove This Meme");
    btnText.class = "form-text"; //but this works
    removeBtn.appendChild(btnText);
    memeDiv.appendChild(removeBtn);

    completedForm.reset();

    removeBtn.addEventListener("click", function(e) { //working but not removing button
        memeDiv.remove(); 
        topImageDiv.remove();
        bottomImageDiv.remove();
        removeBtn.remove();
    })

})


//Stipulations:
//Change font size to fit into meme image if text content of top or bottom is longer aka dynamically change font size.. this is a further step in the project: compare text content length with memeLand width, if longer (pixels?) then resizeText() <- dynamically changes text. Would listen for this on submission of text so it can go in the main function.