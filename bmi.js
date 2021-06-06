let weight = document.getElementById('wInput');
let height = document.getElementById('hInput');


function calculateBMI(){
    w = Number(weight.value)
    h = Number(height.value)

    if(w > 0 && h > 0){
    let bmi = weight.value/Math.exp(height.value,2);

    if(bmi < 18.5) {
        return document.getElementById('results').innerHTML = `<h3>Results:</h3><p>Your BMI: ${bmi.toFixed(2)}<br />You are underweight.</p>`
      }
      else if(bmi > 18.5 && bmi < 25) {
        return document.getElementById('results').innerHTML = `<h3>Results:</h3><p>Your BMI: ${bmi.toFixed(2)}<br />You have a healthy weight.</p>`
      }
      else if(bmi > 25 && bmi < 30) {
        return document.getElementById('results').innerHTML = `<h3>Results:</h3><p>Your BMI: ${bmi.toFixed(2)}<br />You are overweight .`
      }
      else {
        return document.getElementById('results').innerHTML = `<h3>Results:</h3><p>Your BMI: ${bmi.toFixed(2)}<br />You are obese.`
      }
    }
    else{
        alert("Please enter height in meters and weight in kilograms")
    }
}
