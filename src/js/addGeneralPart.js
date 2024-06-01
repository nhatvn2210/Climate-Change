// DOM
const header = document.querySelector('.header');
// Function
const addHeader = () => {
    let htmls =
    `
        <nav class="flex h-max justify-evenly py-[15px] uppercase text-xl items-center">
            <div class="menu w-[40%] h-full">
                <ul class="flex justify-evenly">
                    <li>
                        <a href="./index.html">home</a>
                    </li>
                    <li>
                        <a href="./blog.html">blog</a>
                    </li>
                    <li>
                        <a href="./weather.html">weather</a>
                    </li>
                    <li>
                        <a href="./about.html">contact & about us</a>
                    </li>
                </ul>
            </div>
            <div class="acc-option w-[30%] justify-center flex">
                <p>
                    <a href="./register.html">Register</a>
                    <span> / </span>
                    <a href="./login.html">Login</a>
                </p>
            </div>
        </nav>
    `;
    header.innerHTML = htmls;
    header.classList.add("w-full");
    header.classList.add("top-0");
    header.classList.add("z-[99]");
    header.classList.add("fixed");

}
// Main script
addHeader();