
addEventListener(`DOMContentLoaded`, (e)=>{
    
let edad = Number(prompt("Dame la",0));
  
switch (true){
    case edad>=18:
       document.querySelector("body").innerHTML = "Es mayor de edad"
    break;
 default:
    document.querySelector("body").innerHTML = "La edad ingresada no cumple con los parámetros"
}
})