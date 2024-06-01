// DOM
const subjectInput = document.querySelector("#subject");
const textMessageInput = document.querySelector("#text-message");
const submit = document.querySelector(".submit");
// Function
const handleMessage = (event) => {
    // Preventing from reloading pages
    event.preventDefault();
    // Get data input
    // Validate data
    if (!subjectInput || !textMessageInput) {
        alert("Plese fill all fields!");
        return;
    }
    // Add to Firestore
    db.collection("messages")
        .add({
            user: currentUser.displayName,
            subject: subjectInput.value,
            textMessage: textMessageInput.value,
        })
        .then(() => {
            // Alert
            alert("Send the message successfully!");
            // Reset all
            subjectInput.value = "";
            textMessageInput.value = "";
        })
        // When adding failed, notice the error
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}
// Main script
submit.addEventListener('click', (event) => {
    handleMessage(event);
})