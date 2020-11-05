(function() {
    const openingBtn = document.querySelector("#nav-icon");
    const sidebar = document.querySelector(".sidebar");
    
    openingBtn.addEventListener("click", function() {
        sidebar.classList.toggle("sidebar--opened");
    });
}())