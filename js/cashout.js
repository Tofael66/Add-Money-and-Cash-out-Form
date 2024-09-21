

document.getElementById('cashout-btn').addEventListener('click',function(event){
    event.preventDefault();

    const cashOut = getInputFiledValueById('input-cashout')
    const pinNumber = getInputFiledValueById('cashPin-number')
    // console.log('inside the click handler' , cashOut , pinNumber)

      if(pinNumber === 1234){

const balance = getTextFiledValueById('account-balance');
if(cashOut > balance){
  alert('you do not have enough money to cash out');
  return ;
}

const newBalance = balance - cashOut ;
document.getElementById('account-balance').innerText = newBalance ;

// add to transaction history
const div = document.createElement('div') ;
div.classList.add('bg-yellow-300');
div.innerHTML = `
<h4 class = "text-2xl font-bold " > Cash Out</h4> 
<p>${cashOut} withdraw. New Balance  ${newBalance} </p>

`

document.getElementById('transection-id').appendChild(div);

      }
      else{
        alert('No money for you .....DGM')
      }

})