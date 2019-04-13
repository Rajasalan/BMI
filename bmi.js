const leftBox = document.querySelector('.left-side');


const list = document.querySelectorAll('li');
console.log(list);
list[0].style.color = "gold";
list[1].style.color = "green";
list[2].style.color = "darkorange";
list[3].style.color = "red";

const calculate = document.querySelector('.submit');
calculate.addEventListener('click', calculateBMI);

// clearing the content
const empty = function () {
    let mass1 = document.querySelector('#weight');
    let height1 = document.querySelector('#height');
    mass1.value = '';
    height1.value = '';
};

// calculating BMI
function calculateBMI() {

    let height = Number(document.querySelector("#height").value);
    let weight = Number(document.querySelector("#weight").value);
    let BMI = (weight / (height * height)).toFixed(2);
    let result = document.querySelector('p');

    if (weight === "" || height === "") {

        result.textContent = `Some fields are empty`;


    } else if (BMI >= 30) {
        //use parentNode to select the parent 
        result.textContent = ` Your BMI is ${BMI}. You are Obese.`;
        result.parentNode.style.backgroundColor = 'red';
        document.querySelector('img').src = './assets/obese.jpg';
    } else if (BMI < 30 && BMI >= 25) {
        result.textContent = `Your BMI is: ${BMI}, You are Overweight`;
        result.parentNode.style.backgroundColor = 'darkorange';
        document.querySelector('img').src = './assets/overweight.jpg';

    } else if (BMI < 25 && BMI >= 18.5) {
        result.textContent = `Your BMI is: ${BMI}, You are Healthy`;
        result.parentNode.style.backgroundColor = 'green';
        document.querySelector('img').src = './assets/normal.jpg';

    } else if (BMI < 18.5) {
        result.textContent = `Your BMI is: ${BMI}, You are Underweight`;
        result.parentNode.style.backgroundColor = 'yellow';
        document.querySelector('img').src = './assets/underweight.jpg';

    }
    /*  else {
            result.textContent = 'Enter the valid value'
        } */


    empty();

}