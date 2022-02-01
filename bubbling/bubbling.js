document.addEventListener("DOMContentLoaded",()=>{



    const buttons = document.querySelectorAll("button");
    buttons.forEach(button =>{
        button.addEventListener("mouseup", changeColor);
        button.addEventListener("mousedown", changeColor);
        button.addEventListener("dblclick", dblclickEffect);
    })


})


function changeColor(event){
    if(this.style.backgroundColor === "red")return;
    event.type === "mousedown" 
        ? this.style.backgroundColor = "orchid" 
        : this.style.backgroundColor = "skyblue";
}

function dblclickEffect(){
    const parrafo = document.querySelector(`p[data-position="${this.dataset.position}"]`);
    (document.querySelector("textarea")).textContent = parrafo.textContent;
    parrafo.style.backgroundColor === "coral" ? parrafo.style.backgroundColor = "transparent" : parrafo.style.backgroundColor = "coral";
    
    console.log(parrafo)
    this.style.backgroundColor === "red" 
        ? this.style.backgroundColor = "transparent" 
        : this.style.backgroundColor = "red";
}