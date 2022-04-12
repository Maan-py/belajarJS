// DOM Selection
// document.querySelector()
//  -> element

// const p4 = document.querySelector('#b p');
// p4.style.color = 'red';
// p4.style.fontSize = "50px";

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = "green";

// const p = document.querySelector('p');
// p.innerHTML = "Javascript";

// // document.querySelectorAll()
// // -> NodeList
// const p1 = document.querySelectorAll('p');
// // p1[0].style.backgroundColor = "salmon";

// for(let i = 0; i < p1.length; i++) {
//     p1[i].style.backgroundColor = "salmon";
// }

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
p4.innerHTML = "Mengubah Node Root";

const sectionB1 = document.querySelector('section#b');

const p41 = sectionB.getElementsByTagName('p')[0];
p41.style.backgroundColor = "yellow";

const sectionA = document.getElementById('a');
const a = sectionA.querySelector('section#a a');

a.innerHTML = "Instagram Muhammad Luqmaan";
