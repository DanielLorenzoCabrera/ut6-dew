const select = {
    video : ["Humor", "Drama", "Ficción", "Otros"],
    disco : ['Pop', 'Rock','Latino','Otros'],
    juego : ['Simulador','Rol','Medieval', 'Otros']
}


document.addEventListener("DOMContentLoaded", ()=>{

    const servicios = document.querySelector(`[name="servicios"]`);
    servicios.addEventListener("change", changeSelect)
    changeSelect();
    const genero = document.querySelector(`[name="genero"]`);
    genero.addEventListener("change", updateTextArea);

})


function changeSelect(){
    const generoSelect = document.querySelector(`[name="genero"]`);
    const actual = this.value === undefined ? "video" : this.value;
    
    generoSelect.innerHTML = `<option value="humor">Humor</option>`;
    const generos = select[actual].map(genero =>{
        return `<option value="${genero}">${genero}</option>`;
    });
    
    generoSelect.innerHTML = generos.join(' ');
    updateTextArea();
    
}

function updateTextArea(){
    const servicio = (document.querySelector(`[name="servicios"]`)).value ;
    const genero = (document.querySelector(`[name="genero"]`)).value;
    const textarea = document.querySelector("textarea");
    const span =  document.querySelector("span");
    span.innerText = servicio;
    textarea.innerText = `Texto de ${servicio} -> ${genero}`;
}