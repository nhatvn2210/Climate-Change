// DOM
const fullNameInput = document.querySelector("#full-name");
const dobInput = document.querySelector("#dob");
const phoneNumberInput = document.querySelector("#phone-number");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");
const submitButton = document.querySelector(".submit-btn");
const form = document.querySelector(".form");
// Function
const handleSignUp = event => {
    // Prevent from reloading
    event.preventDefault();
    // Get value input
    let fullName = fullNameInput.value;
    let dob = dobInput.value;
    let phoneNumber = phoneNumberInput.value;
    let email = emailInput.value;
    let password = passwordInput.value;
    let confirmPassword = confirmPasswordInput.value;
    // Validate data
    if (!fullName || !dob || !phoneNumber || !email || !password || !confirmPassword) {
        alert("Vui lòng điền tất cả trường này!");
        return;
    }
    if (password != confirmPassword) {
        alert("Vui lòng nhập lại mật khẩu chính xác!");
        return;
    }
    // Successfully validate data ==> Run Sign up function 
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            let user = userCredential.user;
            // Alert
            alert("Bạn đã đăng kí thành công!");
            // Update the user's display name
            user.updateProfile({
                displayName: fullName,
            })
                .then(() => {
                    // Display name updated successfully
                    console.log("Display name updated successfully:", user.displayName);
                    alert();
                })
                .catch(error => {
                    console.error("Error updating display name:", error.message);
                })

            // Add to Firestore
            db.collection("users")
                .add({
                    fullName,
                    dob,
                    phoneNumber,
                    email,
                    password
                })
                // When adding failed, notice the error
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
            window.location.pathname = "./login.html";
        })
        .catch((error) => {
            // When sign up failed, alert errors
            let errorCode = error.code;
            let errorMessage = error.message;
            alert(errorMessage);
        });
}
// Main script
form.addEventListener("submit", (event) => {
    handleSignUp(event);
});
