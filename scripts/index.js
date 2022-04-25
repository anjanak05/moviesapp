// Store the wallet amount to your local storage with key "amount"
let amountArr = localStorage.getItem("amount")|| [] 

function WalletFuc(){

   let amount = document.querySelector("#amount").value
    
    amountArr  = eval(amountArr + parseInt(amount));
    let amount1 = document.querySelector("#wallet").textContent = amountArr
    localStorage.setItem("amount", amount1);
    document.querySelector("#amount").value = null
}

function bookMovies(){
    window.location.href = "movies.html";
}