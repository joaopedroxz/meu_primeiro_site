function pesquisar(){
    let section = document.getElementById
    ("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == ""){
        section.innerHTML = "Digite algo."
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let nome = "";
    let descricao = "";
    let tags = "";

    for(let dado of dados){
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            
            resultados += `
                <div class="    item-resultado">
                    <h2>
                        <a href=${dado.link} target="_blank" >${dado.nome}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}<br><br>Nacionalidade: ${dado.nacionalidade}<br>Idade: ${dado.idade}<br>Númeração: ${dado.numeroCamisa}</p>
                    </div>
                    `
         }
    }
    if (!resultados){
        resultados = "<p>Nada foi encontrado!</p>"
    }
section.innerHTML = resultados
}