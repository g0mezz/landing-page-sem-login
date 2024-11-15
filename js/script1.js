function mascara_tel(obj){
    if(obj.value.length == 0){
        obj.value += "("
    }
    else if(obj.value.length == 3){
        obj.value += ")"
    }
    else if(obj.value.length == 9){
        obj.value += "-"
    }
}

function abrir() {
    pagamento = document.orcamento.inputPagamento.value;
    if (pagamento == "Cartão de débito") {
        document.getElementById('cartao').style.display = "block";
        document.orcamento.num.required = true;
        document.orcamento.cod.required = true;
        document.orcamento.vencimento.required = true;
        document.orcamento.num.focus();
    } else {
        document.getElementById('cartao').style.display = "none";
        document.orcamento.num.required = false;
        document.orcamento.cod.required = false;
        document.orcamento.vencimento.required = false;
    }
}


function somente_numero(e) {
    tecla = (window.event)?event.keyCode:e.which;

    if ((tecla >= 48 && tecla <= 57) || (tecla>=96 && tecla <= 105) || (tecla == 8) || (tecla == 37) || (tecla == 39) || (tecla == 46) ){
        return true;
    }
    else{
        return false;
    }
}

function mascara_cartao(obj) {
    comprimento = obj.value.length
    if (comprimento == 4) {
        obj.value += " ";
    } else if (comprimento == 9) {
        obj.value += " ";
    } else if (comprimento == 14) {
        obj.value += " ";
    }
}

function mascara_data(obj) {
    comprimento = obj.value.length;
    if (comprimento == 2) {
        obj.value += "/";
    }
}

function salto(campo,digito) {
    if (campo == "num") {
        if(digito.length==19) {
            document.orcamento.cod.focus()
        }
    }

    if (campo == "cod") {
        if(digito.length==3) {
            document.orcamento.vencimento.focus()
        }
    }
}

function aviso() {
    nome = document.orcamento.nome.value;
    alert(`Seu pedido foi concluído com sucesso, ${nome}!`)
    window.location = 'index.html';
    return false
}