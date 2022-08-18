// add event handler in withdraw button
document.getElementById("withdraw-submit").addEventListener("click", function () {
  // get value form withdraw input field
  const withdrawFieldElement = document.getElementById("withdraw-field");
  const withdrawFieldString = withdrawFieldElement.value;
  //string to number
  const withdrawFieldAmount = parseFloat(withdrawFieldString);

  //clear input field
  withdrawFieldElement.value = "";

  // get value form withdraw total
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const withdrawTotalString = withdrawTotalElement.innerText;
  //string to number
  const withdrawTotalAmount = parseFloat(withdrawTotalString);

  // calculation withdraw total
  const currentWithdrawTotal = withdrawTotalAmount + withdrawFieldAmount;

  // set the value in the page
  withdrawTotalElement.innerText = currentWithdrawTotal;

  // get balance total amount
  const balanceTotalElement = document.getElementById("balance-total");
  const balanceTotalString = balanceTotalElement.innerText;
  //string to number
  const balanceTotal = parseFloat(balanceTotalString);

  // calculation balance total
  const currentBalanceTotal = balanceTotal - withdrawFieldAmount;

  // set the value in the page
  balanceTotalElement.innerText = currentBalanceTotal;
});
