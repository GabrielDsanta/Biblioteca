

let bookName = []
let bookYear = []
let bookWriter = []
let bookLanguage = []

let choice = true
let contador = 0
let choice2



while(choice){
    choice2 = prompt("1 /// Cadastrar Livro /// 2 Procurar Livro Pelo Autor /// 3 Finalizar")
    if(choice2 == "1"){
        cadastro()
    }

    if(choice2 == "2"){
        ShowBooks()
    }

    if(choice2 == "3"){
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


function ShowBooks(){
    let contador2 = 0
    let LivrosAutorX = []
    let autor = prompt("Qual o nome do Autor que você deseja ver os livros ?")
    for(let index = 0; index < bookWriter.length; index++){
        if(autor == bookWriter[index]){
            LivrosAutorX[contador2] = bookName[index]
            contador2++
        }
    }

    return alert(`Os Livros do Autor ${autor}: ${LivrosAutorX}`)
}