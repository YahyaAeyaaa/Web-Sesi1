// ==== Biodata sederhana ====
const nama = 'Mikasa';
const usia = 20;

const biodata = document.getElementById('biodata');

function generateBiodata() {
  // menentukan "generasi" berdasar usia
  let generasi;
  let hobi;

  /* 🚩 Operator logika harus pakai &&, bukan bitwise &  */
  if (usia > 2 && usia <= 5) {
    generasi = 'Seasons 1';
    hobi = 'Nangis';
  } else if (usia > 5 && usia <= 14) {
    generasi = 'Seasons 2';
    hobi = 'Main Bola';
  } else if (usia > 14 && usia <= 18) {
    generasi = 'Seasons 3';
    hobi = 'Main Game';
  } else if (usia > 18 && usia <= 22) {
    generasi = 'Seasons 4';
    hobi = 'Kerja';
  } else {
    generasi = 'Tamat';
    hobi = '-';
  }

  // Menampilkan di halaman
  biodata.innerHTML = `${nama} ${generasi}`;
}

console.log(nama);
console.log(usia);

generateBiodata();