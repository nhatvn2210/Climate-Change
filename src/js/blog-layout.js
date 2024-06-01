// DOM
const createCaller = document.querySelector(".create-caller");
const createCallerName = document.querySelector(".name");
const createForm = document.querySelector(".create");
const darkOverlay = document.querySelector(".dark-overlay");
const removeCreateBtn = document.querySelector(".remove-create-form");
const editForm = document.querySelector(".edit");
const removeEditBtn = document.querySelector(".remove-edit-form");
// Function
// Add name for form caller
const addName = (name) => {
    createCallerName.innerHTML = name;
}

// Call create form
const callCreateForm = () => {
    createForm.classList.add("block");
    darkOverlay.classList.add("block");
}
// Remove create form

const removeCreateForm = () => {
    createForm.classList.remove("block");
    darkOverlay.classList.remove("block");
}

// Call edit form

const callEditForm = (id, title, content, imgPath) => {
    currentPostId = id;
    document.querySelector("#edit-title").value = title;
    document.querySelector("#edit-content").value = content;
    document.querySelector("#edit-image").value = imgPath;
    editForm.classList.add("block");
    darkOverlay.classList.add("block");
}

// Remove edit form

const removeEditForm = () => {
    editForm.classList.remove("block");
    darkOverlay.classList.remove("block");
}

// Main script

// Run addName(name)
let displayName = currentUser.displayName;
addName(displayName);

// Run callCreateForm()
createCaller.addEventListener("click", () => {
    callCreateForm();
})

// Run removeCreateForm()
removeCreateBtn.addEventListener("click", () => {
    removeCreateForm();
})

// Run removeEditForm()
removeEditBtn.addEventListener("click", () => {
    removeEditForm();
})