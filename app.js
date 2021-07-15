const submit = document.getElementById('submit');
const result = document.getElementById('result');

function binary(e){
    e.preventDefault();
    const num = document.getElementById('number').value;
    console.log(typeof num);

    if (num === ''){
        alert('Please enter a number');
    } else if(num <= 0){
        alert('Please enter a positive number');
    } else {
        result.style.visibility = 'visible';
    }

    let binary = Number(num).toString(2);
    result.innerHTML = binary;
}

submit.addEventListener('click', binary);
