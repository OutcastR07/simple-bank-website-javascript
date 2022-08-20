document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    if (isNaN(newWithdrawAmount)) {
        alert('Please insert amount');
        withdrawField.value = '';
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);



    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Limit exceeded!');
        withdrawField.value = '';
        return;
    }

    const currentWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;

    withdrawTotalElement.innerText = currentWithdrawTotal;

    currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotalElement.innerText = currentBalanceTotal;

    withdrawField.value = '';
})