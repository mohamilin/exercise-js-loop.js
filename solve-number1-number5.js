/*
CHALLENGE 1:
Buat conditional IF .. ELSE IF yang menggambarkan divisi dan tugas divisi pada STARTUP.
        Contoh: Jika saya sebagai HR maka tugas saya adalah melakukan rekrutmen untuk calon pegawai baru

*/

// SOLVE :


let division = "marketing";

if(jobdesk === "HR" ) {
    console.log("Rekrutmen untuk calon pegawai baru");
} else if(division === "marketing") {
    console.log("Memasarkan Produk");
} else if(division === "manager") {
    console.log("Mengatur Team");
} else if(division === "front-end") {
    console.log("Mengembangkan aplikasi");
} else {
    console.log("Menerima Laporan dari seluruh bagian")
}

/*
CHALLENGE 2:
2. Lakukan pengulangan menggunakan FOR LOOP untuk melakukan penambahan nilai sebanyak 10 kali.
    Nilai awal = 0
    Pengulangan = 10 kali
    Nilai awal ditambah 2 setiap pengulangan
    Tampilan hasil penambahan pada setiap pengulangan


*/

//SOLVE

for (let number = 0; number <= 18; number = number + 2) {
    console.log(number);
}

//output
/*

0
2
4
6
8
10
12
14
16
18

*/

/*
CHALLENGE 3 :
3. Lakukan pengulangan dengan FOR LOOP yang melakukan iterasi dari 0..20.
    Setiap iterasi/pengulangan lakukan pengecekan apakah nilai tersebut ganjil atau genap.
    Tampilkan keterangan ganjil dan genap pada sebuah nilai setiap pengulangan

*/

//SOLVE

for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i + " adalah genap");
  } else {
    console.log(i + " adalah ganjil");
  }
}

//Output
/*
0 adalah genap
1 adalah ganjil
2 adalah genap
3 adalah ganjil
4 adalah genap
5 adalah ganjil
6 adalah genap
7 adalah ganjil
8 adalah genap
9 adalah ganjil
10 adalah genap
11 adalah ganjil
12 adalah genap
13 adalah ganjil
14 adalah genap
15 adalah ganjil
16 adalah genap
17 adalah ganjil
18 adalah genap
19 adalah ganjil
20 adalah genap

 */

 /*
 CHALLENGE 4 :
 4. Tampilkan sebuah Konfirmasi Pop Up kepada user menggunakan confirm();
     Berikan teks ‘Apakah anda mau mengulang’ pada box confirm
     Jika user memilih ‘OK’ maka program akan terus menampilan pop up yang sama
     Jika user memilih ‘Cancel’ maka program akan menampilkan teks ‘Perulangan sudah dilakukan sebanyak …(jumlah klik OK yang dilakukan user)


 */

 //SOLVE

 let repeat = confirm("Apakah anda mau mengulang?");
 let count = 0;

 while(repeat){
     let respond = confirm("Apakah anda mau mengulang?")
     count ++;
     if(respond == false){
         repeat = false;
     }
 }
 alert("Perulangan sudah dilakuakn sebanyak " + count + " kali");

 /*
 CHALLENGE 5:
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
 } while (bootcamp != "Impact Byte");
 alert("Selamat jawaban kamu benar");
