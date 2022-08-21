document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    const previousBalaceTotal = getTextElementValueById('balance-total');
    const currentBalanceTotal = previousBalaceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', currentBalanceTotal);
})