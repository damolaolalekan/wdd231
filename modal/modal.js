<button id="openButton">More Information</button>


<dialog id="dialogBox"> 
    <p>Add information about this inside the modal topic</p>
    <button id="closeButton">Close</button>
</dialog>

const openButton = document.querySelector("#openButton");
const closeButton = document.querySelector("#closeButton");
const dialogBox = document.querySelector("#dialogBox");


openButton.addEventListener("click", () => {
    dialogBox.showModal();
});
