const list = document.querySelector(".list");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener('click', function() {
    let chapter = input.value;
    input.value = "";

    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listButton = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = chapter;
    listItem.appendChild(listButton);
    listButton.innerHTML = "&#10060";
    list.appendChild(listItem);

    listButton.addEventListener('click', function() {
        list.removeChild(listItem);
        })
        input.focus();
      })