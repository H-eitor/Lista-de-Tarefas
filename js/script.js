let contador = 0;
let input = document.getElementById("entradaTarefa");
let btnAdd = document.getElementById("btnAdd");
let main = document.getElementById("areaLista");

function addTarefa(){
    let valorInput = input.value;
    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){
        contador++;
        let novoItem = `<div id="${contador}" class="item">
                            <div onclick="marcarTarefa(${contador})" class="item_icone">
                                <span id="icone_${contador}" class="material-symbols-outlined">circle</span>
                            </div>
                            <div class="item_nome" onclick="marcarTarefa(${contador})">
                                ${valorInput}
                            </div>
                            <div class="item_botao">
                                <button class="delete" onclick="deletar(${contador})">Deletar</button>
                            </div>
                        </div>`;
        main.innerHTML += novoItem;
        input.value = "";
        input.focus();
    }
}

input.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
})

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    var tarefa = document.getElementById(id);
    var classe = tarefa.getAttribute("class");
    if(classe === "item"){
        tarefa.classList.add("marcado");
        document.getElementById("icone_" + id).textContent = "task_alt";
        tarefa.parentNode.appendChild(tarefa);
    } else {
        tarefa.classList.remove("marcado");
        document.getElementById("icone_" + id).textContent = "circle";
    }
}