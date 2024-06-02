// DOM
const accOptionDiv = document.querySelector(".acc-option");
const currentUser = JSON.parse(localStorage.getItem("current_user_data"));
// Function
const renderDisplayName = (name) => {
    let htmls =
        `
            <p> Hello, <b>${name}</b></p>
            <i class="fa-solid fa-chevron-right dropdown-arrow"></i>
            <ul class="dropdown-container">
                <li>
                    <button class="sign-out-btn">Sign out</button>
                </li>
            </ul>
    `;
    accOptionDiv.innerHTML = htmls;
    accOptionDiv.classList.add("has-dropdown");
}
// Main script
if(!currentUser){
    window.location.pathname = "./login.html";
}
else{
    renderDisplayName(currentUser.displayName);
}
// firebase.auth().onAuthStateChanged((user) => {
//     if (!user) {
//         // Người dùng chưa đăng nhập, tiếp tục xử lý đăng nhập
//         window.location.replace("./login.html");
//     }
// })