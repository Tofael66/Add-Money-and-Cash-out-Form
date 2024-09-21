

document.getElementById('btn-add-money').addEventListener('click' ,function(event){
event.preventDefault();

// console.log('add money btn clicked')

//  const addMoney = getInputFiledValueById();
//  console.log( 'add money value' , addMoney);

const addMoney = getInputFiledValueById('input-add-money');
const pinNumber = getInputFiledValueById('pin-number');
console.log('add money ', addMoney , pinNumber);


 if(isNaN(addMoney)){
    alert('Filed to and money')
    return ;
 }


// worng way to verify 

 if( pinNumber === 1234){

const balance = getTextFiledValueById('account-balance');
// console.log(balance, addMoney) ;
const newBalance = balance + addMoney ;
document.getElementById('account-balance').innerText=newBalance;

// add to transection history 
const p = document.createElement('p');
p.innerText = `added: ${addMoney} Tk. New Balance: ${newBalance}`;
console.log(p)

// should be a comment function 
document.getElementById('transection-id').appendChild(p);

}

else{
    alert('filed to add the money.')
}


})