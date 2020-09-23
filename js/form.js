var botaoAdd = document.querySelector("#adicionar-paciente"); //seleciona o id do botão

botaoAdd.addEventListener("click", function(event){ // Escutador de eventos
    event.preventDefault(); //tira comportamento do botão de redirecionar para outra pagina após os dados completos
    
    var form = document.querySelector("#form-adicionar");

    var paciente = obtemDadosForm(form);

    // var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagensDeErros(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erros");
    mensagensErro.innerHTML = "";
}); 

function obtemDadosForm(form){

    //classe com js
    var paciente = { 
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
    
}


function montaTr(paciente){
    var pacienteTr = document.createElement("tr"); // cria um elemento passando a tag
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;

}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente) {
    var erros = []; // array de erros

    if(paciente.nome.length == 0) {
        erros.push("O nome não pode ser vazio!");
    }
    if(paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser vazio!");
    }
    if(paciente.peso.length == 0) {
        erros.push("O peso não pode ser vazio!");
    }
    if(paciente.altura.length == 0) {
        erros.push("A altura não pode ser vazio!");
    }
    if(!validaPeso(paciente.peso)) {
        erros.push("Peso invalido!");
    }
    if(!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}

function exibeMensagensDeErros(erros) {
    var ul = document.querySelector("#mensagens-erros");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}