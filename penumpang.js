const penumpang = [];
const tambahPenumpang = function (namaPenumpang, penumpang) {
  // Jika angkot kosong
  if (penumpang.length == 0) {
    // Tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    // Kembalikan isi array & keluar dari function
    return penumpang;
  } else {
    // Telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // Jika ada kursi kosong
      if (penumpang[i] == undefined) {
        // Tambah penumpang di kursi tersebut
        penumpang[i] == namaPenumpang;
        // Kembalikan isi array & keluar dari function
        return penumpang;
      }
      // Jika ada nama yang sama
      else if (penumpang[i] == namaPenumpang) {
        // Tampilkan pesan kesalahannya
        console.log(namaPenumpang + "sudah ada di dalam angkot");
        // Kembalikan isi array & keluar dari function
        return penumpang;
      }
      // Jika seluruh kursi terisi
      else if (i == penumpang.length - 1) {
        // Tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        // Kembalikan isi array & keluar dari functions
        return penumpang;
      }
    }
  }
};

const hapusPenumpang = function (namaPenumpang, penumpang) {
  // Jika angkot masih kosong
  if (penumpang.length == 0) {
    // Tampilkan pesan angkot kosong
    console.log("Angkot masih kosong.");
  } else {
    // Telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // Jika ada nama penumpang yang ingin dihapus
      if (penumpang[i] == namaPenumpang) {
        // Hapus nama penumpang
        penumpang[i] = undefined;
        // Kembalikan isi array & keluar dari function
        return penumpang;
        // Jika tidak ada nama penumpang yang ingin dihapus
      } else if (i == penumpang.length - 1) {
        // Tampilkan pesan
        console.log(namaPenumpang + " Tidak ada di dalam angkot");
        // Kembalikan isi array & keluar dari function
        return penumpang;
      }
    }
  }
  return penumpang;
};


