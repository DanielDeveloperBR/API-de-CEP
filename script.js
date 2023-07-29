const form = document.querySelector("form")
//Criando um paragrafo
const resultado = document.createElement("div")
//Colocando os novos elementos como filho do formulario
form.append(resultado)
form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    const cep = form.cep.value.trim()
    if (cep === "") {
        alert("Digite um CEP válido.")
    }
    //Usando a api do viacep com o framework do ajax
    $.ajax({
        url: `https://viacep.com.br/ws/${cep}/json/`, success: function (result) {
            //mostrando a mensagem dinamicamente
            const conteudo = `<p>Endereço: ${result.logradouro}</p>
            <p>Cidade: ${result.localidade}</p>
            <p>Estado: ${result.uf}</p>
            <p>Bairro: ${result.bairro}</p>`
            resultado.innerHTML = conteudo
        },
        error: function () {
            alert("CEP não existe")
        }
    })
})

