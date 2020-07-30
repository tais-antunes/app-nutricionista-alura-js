var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() { //o evento de input que é responsável por detectar quando o usuário começar a digitar no campo
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0) {
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i"); //O modificador "i" é para indicar que estamos buscando por case-insensitive, ou seja tanto "Pa" quanto "pa" achariam a palavra "Paulo", ele não liga para a diferença entre maísuculas e minúsculas.
            
            if(!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for(var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }

})