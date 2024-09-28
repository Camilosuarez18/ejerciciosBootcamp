function verificarEdad(){

    console.log("Ingreso a verificarEdad")
    let edad = document.getElementById('edad').value;
    let resultado = document.getElementById('resultado');

    resultado.classList.remove('mensaje-invalido','mensaje-valido','mensaje-error');

    if (edad ==""){
        resultado.textContent = "Por favor, ingresa la edad";
        resultado.classList.add('mensaje-error');
    }else if(edad < 0){
        resultado.textContent = "La edad no puede ser negativ o igual a 0";
        resultado.classList.add('mensaje-invalido');
    }else if(edad.length >= 3){
        resultado.textContent = "La longitud del campo edad es mayor de lo esperado";
        resultado.classList.add('mensaje-invalido');
    }else if(edad >= 18){
        resultado.textContent = "Eres una persona mayor de edad puedes ingresar al sitio";
        resultado.classList.add('mensaje-valido');
    }else{
        resultado.textContent="Es menor de edad no puede ingresar";
        resultado.classList.add('mensaje-error');
    }
}