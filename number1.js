/*
CHALLENGE : 
Kita sudah mengetahui bahwa banyaknya user maksimal adalah 100.
    Buat sebuah program yang menampilkan teks ‘User ke - 1 … User ke - 100’ pada setiap baris di halaman HTML.
    Lakukan FOR LOOP pada Javascript.

*/

// SOLVE :
let user = 0;
for(let user = 1; user <= 100; user++) {
    document.write("<br>");
    document.write("User ke - " + user);
}

