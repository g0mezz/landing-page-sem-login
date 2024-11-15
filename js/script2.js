  let num = 0;
  const tarefaInput = document.getElementById("tarefa");
  const adicionarBotao = document.getElementById("btn-new-task");
  const listaTarefas = document.getElementById("to-do-list");

  adicionarBotao.addEventListener("click", adicionarTarefa);

  function adicionarTarefa() {
    const tarefaTexto = tarefaInput.value.toUpperCase();
    if (tarefaTexto.trim() !== "") {
        const novaTarefa = document.createElement("li");
        novaTarefa.innerHTML = `${tarefaTexto}<button class="excluir" onclick="deletar()">Excluir</button>`;
        listaTarefas.appendChild(novaTarefa);
        tarefaInput.value = "";
    }
  }

  function contador()  {
    num++
    tarefasNum.innerHTML = `${num}`;
  }

  function deletar() {
    num = num - 1;
    tarefasNum.innerHTML = `${num}`;
  }

  function enviar() {
    tecla = (window.event)?event.keyCode:e.which;
    if (tecla == 13) {
      adicionarTarefa()
      contador()
    }
  }
  
  
  listaTarefas.addEventListener("click", function (e) {
    if (e.target.classList.contains("excluir")) {
        e.target.parentElement.remove();
    }
  });


