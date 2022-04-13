// DOM Manipulatiion
// node.appenChild();
// Buat elemen baru
const pBaru = document.createElement("p");
const teksPBaru = document.createTextNode("Paragraf Baru");

// Simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);

// Simpan pBaru di akhir Section A
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

// Bikin element baru
const liBaru = document.createElement("li");
// Bikin teks Li baru
const teksLiBaru = document.createTextNode("Item Baru");
// Masukkan teks ke li
liBaru.appendChild(teksLiBaru);

// Ambil parents/tempat li baru mau diletakkan
const ul = document.getElementsByTagName("ul")[0];
// Ambil elemen setelahnya
const li2 = ul.querySelector("li:nth-child(2)");

// Panggil parents tempat element baru mau diletakkan
// node.insertBefore(elementBaru, elementSetelahnya);
ul.insertBefore(liBaru, li2);



const link = document.getElementsByTagName("a")[0];
// Menghapus
// parents.removeChild();
sectionA.removeChild(link);

// Mengubah elemen lama dengan elemen baru
// Tangkap parents
const sectionB = document.getElementById("b");
// Tangkap elemen yang ingin diganti
const p4 = sectionB.getElementsByTagName("p")[0];

// Bikin elemen pengganti
const h2Baru = document.createElement("h2");
// Bikin teks isinya
const teksH2Baru = document.createTextNode("Ini h2 Baru");

// Masukkan teks baru ke elemen
h2Baru.appendChild(teksH2Baru);

// Elemen baru Timpa elemen lama
// node.replaceChild(elemenBaru, elemenLama);
sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = "lightgreen";
h2Baru.style.backgroundColor = "lightgreen";
liBaru.style.backgroundColor = "lightgreen";


