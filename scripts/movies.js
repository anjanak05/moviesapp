// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let id; 
let amountArr = localStorage.getItem("amount") || [] 
console.log(amountArr)
let amount1 = document.querySelector("#wallet").textContent = amountArr



 async function moviesFunction() {

try{
const searchId = document.querySelector("#search").value;

let url = await fetch(`https://www.omdbapi.com/?apikey=71926cd5&s=${searchId}`)

let data = await url.json();
 append1(data.Search)

}catch(error){
    console.log(error)
}

}




let moviesArr = JSON.parse(localStorage.getItem("movie")) || []

function append1(data){
    document.querySelector("#movies").innerHTML = null
data.map(function(elem){
   
let mainDiv = document.createElement("div");
let image  = document.createElement("img");
image.src = elem.Poster

let title = document.createElement("p");
title.innerText = elem.Title

let button = document.createElement("p");
button.innerHTML = "<button>Book now</button>"
button.setAttribute("class", "book_now")
button.addEventListener("click", function(){
    bookFunc(elem)
})


mainDiv.append(image, title, button)
document.querySelector("#movies").append(mainDiv)



})
}




async function main(){
    let data = await moviesFunction()
    if(data === undefined){
        return false;
    }

    append1(data)
}



function debounce(func, delay){
    if(id){
        clearTimeout(id)
    }
    
    id = setTimeout(function(){
         func();
     }, delay)
}



function bookFunc(elem){
    moviesArr.push(elem)
    localStorage.setItem("movie", JSON.stringify(moviesArr))
    window.location.href="checkout.html"
}
