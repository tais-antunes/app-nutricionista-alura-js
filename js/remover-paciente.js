var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {//dblclick -> duplo click
    event.target.parentNode.classList.add("fadeOut");
    
    if(event.target.tagName == "TD"){
        setTimeout(function() {
            event.target.parentNode.remove();
        }, 500);
    }
})
    
