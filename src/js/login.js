// DOM
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const form = document.querySelector(".form");
// Function
// Handle log in

const handleLogin = (event) => {
    // Prevent from reloading pages
    event.preventDefault();
    // Get value input
    const email = emailInput.value;
    const password = passwordInput.value;
    // Use log in fuction by Firebase
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            let user = userCredential.user;

            // Save data into LS
            let userSaveLS = {
                displayName: user.displayName,
                email: user.email,
            }
            localStorage.setItem('current_user_data', JSON.stringify(userSaveLS))
            alert('Đăng nhập thành công!');
            window.location.pathname = "./index.html";

        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            alert(errorMessage);
        });
}
// Main script
form.addEventListener("submit", (event) => {
    handleLogin(event);
});