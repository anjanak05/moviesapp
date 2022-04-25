// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let amountArr = localStorage.getItem("amount") || []
console.log(amountArr)
let amount1 = document.querySelector("#wallet").textContent = amountArr
let amount2 = document.querySelector("#wallet").textContent;

let moviesArr = JSON.parse(localStorage.getItem("movie")) || []




moviesArr.map(function (elem) {

    let mainDiv = document.createElement("div");
    let image = document.createElement("img");
    image.src = elem.Poster

    let title = document.createElement("p");
    title.innerText = elem.Title

    mainDiv.append(title, image)
document.querySelector("#movie").append(mainDiv)
    })



    function boookiingfunc() {
       let name =  document.querySelector("#user_name").value;
      let noofPeople =   document.querySelector("#number_of_seats").value;
let q = noofPeople *100;
console.log(q)
if(q>amountArr){
    alert("Insufficient Balance!")
}else{
    let a = amountArr - q 
    document.querySelector("#wallet").textContent = a
    alert("Booking successful!")
}

    }