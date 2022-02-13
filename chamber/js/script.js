let date = new Date();
let day = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();

document.querySelector("#currentYear").textContent = new Date().getFullYear();

let options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
};

document.getElementById("lastUpdated").textContent = document.lastModified;



const datefield = document.querySelector(".date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;



const hambutton = document.querySelector('.hamburger');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};