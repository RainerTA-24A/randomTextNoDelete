const url = "https://kool.krister.ee/chat/randomtext5";

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const Button = document.getElementById("btn");

function addText() {
    if (inputBox.value === '') {
        alert("Write something you donut!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
 
    listContainer.appendChild(li);

}

async function fetchMessages() { 
  const response = await fetch(url);
  const data = await response.json();
  const listContainer = document.getElementById("list-container");

  listContainer.innerHTML = ""; // kui ei ole siis jääbki 24/7 sõnumeid saatmas websiti.

  for (const item of data) {
    const kiri = item.kiri;

    // teeb uue li elemendi iga sõnumi jaoks
    const li = document.createElement("li");
    li.textContent = kiri; // kiri oleks ikka li, et style oleks sama
    
    listContainer.appendChild(li);
  }
}

setInterval(fetchMessages, 1000);

Button.addEventListener("click", function () {
  const messageContent = inputBox.value.trim(); // trim removib extra vahed
  if (!messageContent) {
    alert("Write something you donut!"); 
    return; // ei saada andmeid andmebaasi
  }
  const message = {
      kiri: inputBox.value
      
  };

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(message)
});
inputBox.value = "";
})

