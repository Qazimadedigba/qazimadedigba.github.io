function convertcurrency () {
  let from = document.getElementById("from") [0].value;
  let to = document.getElementById("to") [0].value;
  let fromAmount = document.getElementById("fromAmount").value;
  let toAmount = document.getElementById("toAmount");
  const urlconvert = "https://free.currencyconverterapi.com";
  fecth(urlconvert).then(response => {
    return response.json();
  }).then(rates => {
    console.log(rates);
    for ( let rate in rates) {
      console.log(rates[rate]);
      let calc = rates[rate];
      console.log(calc, fromAmount);

      let total = (calc * fromAmount);

      console.log(total);
      toAmount.value = total;
    }
  })
}
