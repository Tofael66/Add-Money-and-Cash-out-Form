


// function getInputFiledValueById (){
//     console.log('will get the value by id');
//     const addMoney =document.getElementById('add-money').value ;
//     return addMoney ;
// }

function getInputFiledValueById(id){

    const inPutValue = document.getElementById(id).value ;
    const inputNumber = parseFloat(inPutValue);
    // console.log(id, inPutValue, inputNumber)
  
    return inputNumber ;
}



function getTextFiledValueById(id){
    const textValue  = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber ;
      
}



function ShowSectionById(id){
// hide all the section
 document.getElementById('add-money-form').classList.add('hidden') ;
 document.getElementById('cashout-form').classList.add('hidden');
  document.getElementById('transection-id').classList.add('hidden');

  // show the section with the provide id as parameter 
  document.getElementById(id).classList.remove('hidden');

}

