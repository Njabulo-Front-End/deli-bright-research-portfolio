"use strict"


// Publications
setupToggle(
    "publications",
    "viewButtons-pub",
    ".pub-grid",
    "see-pub",
    "close-bottom-pub"
);

// Gallery
setupToggle(
    "gallery",
    "viewButtons-gal",
    ".gallery-box",
    "see-gal",
    "close-bottom-gal"
);

// Toggle function to run all functions Gallery and Publications section
function setupToggle(sectionId, headerSec, gridSelector, openBtnId, closeBtnId) {
    const section = document.getElementById(sectionId);
    const viewControl = document.getElementById(headerSec);
    const grid = document.querySelector(gridSelector);
    const openBtn = document.getElementById(openBtnId);
    const closeBtn = document.getElementById(closeBtnId);


    //Creating the top close element 
    let hideIcon = document.createElement('img');
        hideIcon.src = "images/not-visible.png"; 
        hideIcon.alt = "close this"; 
        hideIcon.id = "close-top";

    //Function to open section
    function openSection() {
        viewControl.appendChild(hideIcon);
        let closeBtn2 = document.getElementById("close-top")

        grid.style.display = "grid";
        openBtn.style.display = "none";
        closeBtn.style.display = "block";
        closeBtn2.style.display = "block";

        closeBtn2.addEventListener("click", closeSection);

        section.scrollIntoView({ behavior: "smooth" });
    }

    //Function to close section
    function closeSection() {
        viewControl.removeChild(hideIcon);

        grid.style.display = "none";
        openBtn.style.display = "block";
        closeBtn.style.display = "none";
        section.scrollIntoView({ behavior: "smooth" });
    }

    openBtn.addEventListener("click", openSection);
    closeBtn.addEventListener("click", closeSection);
}
