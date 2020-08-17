/*

5. Buat sebuah program kuis.
    Tampilkan prompt() untuk meminta inputan dari user. Tampilan teks ‘Sebutkan kepanjangan dari nama IB (Impact Byte)?’
    Lakukan pengecekan apakah jawaban dari user sudah benar
    Jika benar, tampilkan alert ‘Selamat jawaban kamu benar’
    Jika salah, lakukan pengulangan untuk menampilkan prompt() yg sama hingga jawaban dari user benar


*/

//SOLVE

let bootcamp;
do {
    bootcamp = prompt("Sebutkan kepanjangan dari nama IB ?");
} while (bootcamp != "impact byte");
alert("Selamat jawaban kamu benar");