const form = document.querySelector("form")
form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    const cep = form.cep.value
    //Usando a api do viacep com o framework do ajax
    $.ajax({
        url: `http://viacep.com.br/ws/${cep}/json/`, success: function (result) {
            //Criando um paragrafo
            const endereco = document.createElement("p")
            const cidade = document.createElement("p")
            const estado = document.createElement("p")
            const bairro = document.createElement("p")
            //Colocando os novos elementos como filho do formulario
            form.append(endereco)
            form.append(cidade)
            form.append(estado)
            form.append(bairro)
            //mostrando a mensagem dinamicamente
            endereco.innerHTML = (`Endereço: ${result.logradouro}`)
            cidade.innerHTML = (`Cidade: ${result.localidade}`)
            estado.innerHTML = (`Estado: ${result.uf}`)
            bairro.innerHTML = (`Bairro: ${result.bairro}`)
        }
    })
})

