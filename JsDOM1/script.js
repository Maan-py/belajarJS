// DOM Selection
// document.getElementById() 
// -> element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Muhammad Luqmaan';

// document.getElementsByTagName() 
// -> HTMLCollection
const p = document.getElementsByTagName('p');
// p[1].style.backgroundColor = 'yellow';

for(let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = "yellow";
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElementsByClassName()
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = "Rill cuy";

// Nyoba
const a = document.getElementsByTagName('a')[0];
a.innerHTML = "Instagram Muhammad Luqmaan";