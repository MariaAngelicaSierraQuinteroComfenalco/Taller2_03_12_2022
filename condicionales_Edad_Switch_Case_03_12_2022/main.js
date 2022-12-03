
addEventListener(`DOMContentLoaded`, (e)=>{
    
let edad = Number(prompt("Dame la",0));
     if (edad >=18) { 
        document.querySelector("body").innerHTML = "Es mayor de edad"
     } else { 
        document.querySelector("body").innerHTML = "La edad ingresada no cumple con los parámetros"
     }
  
})