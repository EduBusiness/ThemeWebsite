
const navBtn = document.querySelector(".btn-toggle");

const sidebar = document.querySelector(".sidebar");

navBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar")
})
