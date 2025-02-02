// pohon angka
let height = 4;

let startnumber = 1;
for (let i = 0; i <= height; i++){
    let baris = "";
    for (let j =1; j <= i; j++){
        baris += `${startnumber.toString().padStart(2, '0')} `;
        startnumber++;
    }
    console.log(baris);
    
}