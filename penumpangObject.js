// Membuat object angkot
function Angkot(supir, jalur, penumpang, kas) {
  this.supir = supir;
  this.jalur = jalur;
  this.penumpang = penumpang;
  this.kas = kas;

  // Memasukkan nama penumpang
  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  }

  // Menghapus nama penumpang
  this.penumpangTurun = function (namaPenumpang, bayar) {
      // Jika angkot masih kosong
      if( this.penumpang.length === 0 ) {
          alert('Angkot masih kosong');
          return false;
      }
      // Telusuri seluruh penumpang
      for( var i = 0; i < this.penumpang.length; i++ ) {
          if( this.penumpang[i] == namaPenumpang ) {
              // Hapus nama penumpang
              this.penumpang[i] = undefined;
              // Tambah object kas
              this.kas += bayar;
              return this.penumpang;
          }
      }
  }
}

const angkot1 = new Angkot(
  "Muhammad Luqmaan",
  ["Pekanbaru", "Yogyakarta"],
  [],
  0
);

const angkot2 = new Angkot("Maan", ["Pekanbaru", "Panam"], [], 0);
