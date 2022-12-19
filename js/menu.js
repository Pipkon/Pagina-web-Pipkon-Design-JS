const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-navegacion');


// console.log(menu)
// console.log.(hamburguer)

hamburguer.addEventListener('click', ()=>{
//    alert("click") //salta una alerta de click
    menu.classList.toggle("spread")
})

window.addEventListener("click", e=>{
    if(menu.classList.contains("spread") && e.target != menu && e.target != hamburguer     ){
            menu.classList.toggle("spread")
    }
//    console.log(e.target) //saber a que le estoy haciendo clik en el navegador en inspeccionar en consola
})
