//Declarar les variables
let pregunta = document.getElementById("pregunta");
let resposta = document.getElementById("resposta");
let mostrar = document.getElementById("mostrar")
let enviar = document.getElementById("enviar");
let omplir = document.getElementById("omplir");
let omplir1 = document.getElementById("omplir1");
let mostrarinput = document.getElementById("mostrarinput");

let respostacorrecta; 
let preguntaran

// Crear capctcha
function generarcaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1; 
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operations = ['+', '-', '*']; 
    const operation = operations[Math.floor(Math.random() * 3)]; 

    if (operation === '+') {
        respostacorrecta = num1 + num2;
        preguntaran = `${num1} + ${num2}`;
    } else if (operation === '-') {
        respostacorrecta = num1 - num2;
        preguntaran= `${num1} - ${num2}`;
    } else {
        respostacorrecta = num1 * num2;
        preguntaran = `${num1} * ${num2}`;
    }
}

// Mostrar el captcha 
function mostrarcaptcha() {
    generarcaptcha(); 
    pregunta.innerHTML = preguntaran;
}

// Comprovar la resposta
function comprovaresposta() {
    const respostausuari = parseInt(resposta.value); 
    let missatgeresultat; 

    if(respostausuari === respostacorrecta) {
        missatgeresultat = "Resposta correcta.";
    }else{
        missatgeresultat = "Resposta incorrecta.";
    }

    mostrar.innerHTML = missatgeresultat;
}

//Afegir esdeveniment
enviar.addEventListener("click", comprovaresposta);

// Mostrar el captcha al html
mostrarcaptcha();