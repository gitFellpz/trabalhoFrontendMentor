function receberValor(valor){
    const inserir = document.getElementById('valor__selecionado')

    inserir.innerHTML = valor
}

function travarEtrocarTela(){
    event.preventDefault()

    const inserido = document.getElementById('valor__selecionado').textContent
    if(inserido === ""){
        alert('Por favor, dê uma nota.')
        return
    }

    const box1 = document.getElementById('box-1')
    const box2 = document.getElementById('box-2')

    box1.classList.remove('ativado')
    box2.classList.add('ativado')
}
