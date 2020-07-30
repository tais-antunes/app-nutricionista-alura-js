var botaoAdicionarPacientes =  document.querySelector("#buscar-pacientes");

botaoAdicionarPacientes.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //inicia uma conexão

    xhr.addEventListener("load", function() { //escutando o evento de load:
        var erroAjax = document.querySelector("#erro-ajax");
        
        if(xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta); //transforma um JSON em um objeto 
            
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
      });
    xhr.send(); // envia os dados
});