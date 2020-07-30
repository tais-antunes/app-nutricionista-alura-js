var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;

    var alturaValida = validaAltura(altura);
    var pesoValido = validaPeso(peso);

    if(!pesoValido) {
        console.log("Peso invalido");
        pesoValido = false;
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaValida) {
        console.log("Altura invalida");
        alturaValida = false;
        tdImc.textContent = "Altura Invalida";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoValido && alturaValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }


    function calculaImc(peso, altura){
        var imc = 0;

        imc = peso / (altura * altura); 

        return imc.toFixed(2); // retorna imc dps de calculado
    }

}

function validaPeso(peso) {
    if(peso > 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}