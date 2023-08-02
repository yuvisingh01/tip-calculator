
const billInput=document.getElementById('billTotalInput')
const tipInput=document.getElementById('tipInput')
const numberOfPeopleDiv=document.getElementById('numberOfPeople')
const perPersonTotalDiv=document.getElementById('perPersonTotal')

let numberOfPeople=Number(numberOfPeopleDiv.innerText)

const calculateBill = () => {
  
  const bill=Number(billInput.value)

  const tipPercentage=Number(tipInput.value)/100

  const tipAmount =bill*tipPercentage

  const total =tipAmount+bill


  // calculate the per person total (total divided by number of people)
const perPersonTotal=total/numberOfPeople

  // update the perPersonTotal on DOM & show it to user
perPersonTotalDiv.innerText=`$${perPersonTotal.toFixed(2).toLocaleString('en-US')}`
}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
numberOfPeople+=1

  // update the DOM with the new number of people
numberOfPeopleDiv.innerText=numberOfPeople

  // calculate the bill based on the new number of people
calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
if(numberOfPeople<=1)
  {
    return
  }
  
  // decrement the amount of people
  numberOfPeople-=1
  // update the DOM with the new number of people
numberOfPeopleDiv.innerText=numberOfPeople

  // calculate the bill based on the new number of people
calculateBill()
}
