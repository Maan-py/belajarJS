// Cara mendengarkan event

// 1. Event handler
// Inline HTML attribute
/* <p class="p3" onclick="ubahWarna()">paragraf 3</p> */
const p3 = document.querySelector('.p3')

function ubahWarna() {
    p3.style.backgroundColor = "lightblue"
}

// Element method
p3.onclick = ubahWarna

// 2. addEventListener("namaEvent", "function")
const p4 = document.querySelector("section#b p")
p4.addEventListener("click", function() {
    const ul = document.getElementsByTagName("ul")[0]
    const liBaru = document.createElement("li")
    const textLi = document.createTextNode("Item Baru")
    liBaru.appendChild(textLi)
    ul.appendChild(liBaru)
})

