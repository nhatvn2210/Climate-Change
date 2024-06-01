// DOM
const signOutBtn = document.querySelector(".sign-out-btn");
console.log(signOutBtn);
// Function
const handleSignOut = () => {
    const text = "Bạn có muốn đăng xuất không?";
    if (confirm(text)) {
        localStorage.setItem("current_user_data", "");
        firebase
            .auth()
            .signOut()
            .then(() => {
                // Sign out successfully
                alert("Đăng xuất thành công!");
                window.location.replace("./login.html"); // Go to login page
            })
            .catch(function (error) {
                // Render error if failed
                console.error(error);
            });
    }
};
// Main script

signOutBtn.addEventListener("click", () => {
    handleSignOut();
})