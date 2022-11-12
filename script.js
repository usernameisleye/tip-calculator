const inputField = document.getElementById('amountSpent');
const rating = document.getElementById('ratings');
let tip = document.getElementById('tip');
const calculateBtn= document.getElementById('calculate');
const valueBtns = document.querySelectorAll('.btn');

calculateBtn.addEventListener('click', calcTip)

function calcTip(){
    if(inputField.value.length === 0 || rating.value === ""){
        alert('Please fill in all fields below');
        return;
    }
    let myTip = inputField.value * Number(rating.value);

    tip.textContent = Math.floor(myTip);  
};



valueBtns.forEach(e =>{
    e.addEventListener('click', button =>{
        let value = button.target.classList;
        if(value.contains('decrease')){
            tip.textContent--;
        }
        else if(value.contains('increase')){
            tip.textContent++;
        }
        else{
            return
        }
    })
})

