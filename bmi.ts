// untuk ngecek BMI

function bodymassindex(weigth, height){
    let bmi = weigth/height
    if (bmi < 18.5){
        return "less weight";
    } else if (bmi >= 18.5 && bmi <= 24.9){
        return "ideal";
    } else if (bmi >= 25.0 && bmi <= 29.9){
        return "overweight";
    } else if (bmi >= 30.0 && bmi <= 39.9){
        return "very overweight";
    } else {
        return "obesity"
    }
}


// contoh argumen dari functionnya
let berat_ben = bodymassindex(51,162)

console.log(berat_ben);
// outputnya : less weight
