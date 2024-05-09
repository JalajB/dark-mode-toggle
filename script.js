const inputEl = document.querySelector(".input");

const bodyEl = document.querySelector("body")

inputEl.checked =JSON.parse( localStorage.getItem("mode"));

updateBody()

function updateBody(){
    if(inputEl.checked){
        bodyEl.style.background = " #00040d";
    }
    else{
        bodyEl.style.background = "wheat";
    }
}

inputEl.addEventListener("input",()=>{

    updateBody();
    updateLocalStorage()
});
function updateLocalStorage(){
    localStorage.setItem("mode",JSON.stringify(inputEl.checked));
}