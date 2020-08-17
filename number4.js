/*

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
