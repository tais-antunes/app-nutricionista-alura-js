function excluirPaciente () {
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.addEventListener("click", function(event) {//dblclick -> duplo click
        event.target.parentNode.classList.add();
        
        if(event.target.tagName == "BUTTON"){
            setTimeout(function() {
                event.target.parentNode.remove();
            }, 500);
        }
    })
}
