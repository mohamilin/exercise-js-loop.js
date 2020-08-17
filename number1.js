/*
CHALLENGE : 
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