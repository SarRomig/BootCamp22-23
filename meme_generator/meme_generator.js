const topText = document.querySelector("#top-text");
const bottomText = document.querySelector("#bottom-text");
const memeImageInput = document.querySelector("#url-input");
const completedForm = document.querySelector("form");
const topImageText = document.querySelector("#top-image-text");
const bottomImageText = document.querySelector("#bottom-image-text");
const memeImage = document.querySelector("#meme-image");
const button = document.querySelector("button");



completedForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let memeDiv = document.createElement("div");
    topImageText.innerText = topText.value;
    bottomImageText.innerText = bottomText.value;
    memeImage.innerHTML = memeImageInput.value;
    memeImage.append(topImageText, bottomImageText);

    memeDiv.innerHTML = memeImage;
    document.querySelector("#meme-div").append(memeDiv);
    completedForm.reset();
    button.onclick = function(e) {
        e.target.memeDiv.remove();
    };
})


