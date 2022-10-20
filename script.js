const inputField = document.getElementById('amountSpent');
const rating = document.getElementById('ratings');
const tip = document.getElementById('tip');
const calculateBtn= document.getElementById('calculate');

calculateBtn.addEventListener('click', calcTip)

function calcTip(){
    if(inputField.value.length === 0 || rating.value === ""){
        alert('Please fill in all fields below');
        return;
    }
    const myTip = inputField.value * Number(rating.value);

    tip.textContent = '₦' + Math.floor(myTip); 
    
};

