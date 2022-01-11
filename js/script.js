let date = new Date();
let day = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();

document.querySelector("#currentYear").textContent = new Date().getFullYear();


try {
    let options = {
        day: "numeric",
        month: "numeric",
        year: "numeric",
    };

    document.getElementById("lastUpdated").textContent = document.lastModified;
} catch (e) {alert("Error with code or your browser does not support Locale");
}