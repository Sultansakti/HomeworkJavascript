const arr = Array.from({length: 100}, () => Math.floor(Math.random() * 50) + 1);

let arrGenap = [];
let arrGanjil = [];
for (let i = 0; i < 100; i++) {
  if (i % 2 == 0) {
      arrGenap.push(arr[i]);
  }
 else
  {
      arrGanjil.push(arr[i]);
  }
}

let minArrGanjil = arrGanjil[0];
let maxArrGanjil = arrGanjil[0];
let minArrGenap = arrGenap[0];
let maxArrGenap = arrGenap[0];
let totalArrGanjil = 0;
let totalArrGenap = 0;

for (let i = 1; i < 50; i++) {
  if(arrGanjil[i] < minArrGanjil){
      minArrGanjil = arrGanjil[i];
  }
    if(arrGanjil[i] > maxArrGanjil){
        maxArrGanjil = arrGanjil[i];
    }
    totalArrGanjil += arrGanjil[i];


    if(arrGenap[i] < minArrGenap){
      minArrGenap = arrGenap[i];
  }
     if(arrGenap[i] > maxArrGenap){
        maxArrGenap = arrGenap[i];
    }
    totalArrGenap += arrGenap[i];

}

let rataRataArrGanjil = totalArrGanjil / arrGanjil.length;
let rataRataArrGenap = totalArrGenap / arrGenap.length;

console.log("Array dengan jumlah index 100:", arr);
console.log("Array dengan indeks genap:", arrGenap);
console.log("Array dengan indeks ganjil:", arrGanjil);
console.log("Minimum arrGanjil:", minArrGanjil);
console.log("Maximum arrGanjil:", maxArrGanjil);
console.log("Total arrGanjil:", totalArrGanjil);
console.log("Rata-rata arrGanjil:", rataRataArrGanjil);
console.log("Minimum arrGenap:", minArrGenap);
console.log("Maximum arrGenap:", maxArrGenap);
console.log("Total arrGenap:", totalArrGenap);
console.log("Rata-rata arrGenap:", rataRataArrGenap);