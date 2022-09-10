

let bookName = []
let bookYear = []
let bookWriter = []
let bookLanguage = []

let choice = true
let contador = 0
let choice2



while(choice){
    choice2 = prompt("1 /// Cadastrar Livro /// 2 Procurar Livro Pelo Autor /// 3 Procurar Livros Pelo Ano /// 4 Procurar Livros de um Autor a partir de determinado Ano /// 5 Finalizar")
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
        ShowBooksByAutorAndYear()
    }

    if(choice2 == "5"){
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
    if(contador2 <= 0){
        return alert("Você inseriu um Autor inválido")
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

    if(contador3 <= 0){
        return alert("Você inseriu um Ano inválido")
    }

    return alert(`Os Livros do Ano ${ano}: ${LivrosAnoX}`)
}

function ShowBooksByAutorAndYear(){
    let contador4 = 0
    let contador5 = 0
    let ano2
    let LivrosAnoAutorX = []
    let Limite = 1

    let autor2 = prompt("Qual o nome do Autor ?")
    for(let index4 = 0; index4 < Limite; index4++){
        if(autor2 == bookWriter[index4]){
            ano2 = prompt("A Partir de qual Ano você quer ver os livros desse Autor ?")
            for(let index5 = 0; index5 < bookYear.length; index5++){
                if(bookYear[index5] >= ano2){
                    LivrosAnoAutorX[contador5] = bookName[index5]
                    contador5++
                }

                if(contador5 <= 0){
                    return alert("Você digitou um valor inválido")
                }
            }
        }

        else{
            Limite++
            contador4++
        }
    }

    if(contador4 > 0){
        return alert("Você digitou um Autor inválido")
    }
    return alert(`Os Livros do Autor ${autor2} a partir do Ano ${ano2} são: ${LivrosAnoAutorX}`)
}