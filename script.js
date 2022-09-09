

let bookName = []
let bookYear = []
let bookWriter = []
let bookLanguage = []

let choice = true
let contador = 0
let choice2



while(choice){
    choice2 = prompt("1 /// Cadastrar Livro /// 2 Procurar Livro Pelo Autor /// 3 Procurar Livros Pelo Ano /// 4 Finalizar")
    if(choice2 == "1"){
        cadastro()
    }

    if(choice2 == "2"){
        ShowBooksByAutor()
    }

    if(choice2 == "3"){
        ShowBooksByYear()
    }

    if(choice2 == "4"){
        choice = false
    }
}

function cadastro(){
    bookName[contador] = prompt("Cadastre o nome do Livro")
    bookYear[contador] = prompt("Cadastre o Ano do Livro")
    bookWriter[contador] = prompt("Cadastre o Nome do Autor do Livro")
    bookLanguage[contador] = prompt("Cadastre o Idioma do Livro")
    contador++
}


function ShowBooksByAutor(){
    let contador2 = 0
    let LivrosAutorX = []
    let autor = prompt("Qual o nome do Autor que você deseja ver os Livros ?")
    for(let index = 0; index < bookWriter.length; index++){
        if(autor == bookWriter[index]){
            LivrosAutorX[contador2] = bookName[index]
            contador2++
        }
    }

    return alert(`Os Livros do Autor ${autor}: ${LivrosAutorX}`)
}

function ShowBooksByYear(){
    let contador3 = 0
    let LivrosAnoX = []
    let ano = prompt("Qual o Ano que você deseja ver os Livros ?")
    for(let index3 = 0; index3 < bookYear.length; index3++){
        if(ano == bookYear[index3]){
            LivrosAnoX[contador3] = bookName[index3]
            contador3++
        }
    }

    return alert(`Os Livros do Ano ${ano}: ${LivrosAnoX}`)
}