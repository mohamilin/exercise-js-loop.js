/*

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
