document.addEventListener("DOMContentLoaded", ()=>{

    const boton = document.querySelector('button');
    boton.addEventListener("mouseover", huir);
    boton.addEventListener("click", ()=>{
        alert("Me pillaste");
        location.reload();
    });



})


function huir(){

    const [x,y]= [this.offsetLeft,this.offsetTop]
    const [newX, newY] = [x - Math.round(Math.random() * 30), y - Math.round(Math.random() * 30)]

    this.style.left = `${newX}px`;
    this.style.top = `${newY}px`;

    if(newX < 0|| newY < 0){
        alert("¡Perdiste! Inténtalo de nuevo");
        location.reload();
    }


}
