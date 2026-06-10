let totalCalories = 0;
let water = 0;

function calculateBMI(){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value / 100;

    let bmi = weight / (height * height);

    document.getElementById("bmiResult").innerText =
        "BMI: " + bmi.toFixed(1);
}

function addCalories(){
    let calories = Number(document.getElementById("calories").value);

    totalCalories += calories;

    document.getElementById("calorieTotal").innerText =
        totalCalories;
}

function addWater(){
    water++;

    document.getElementById("waterCount").innerText =
        water;
}