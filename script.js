

let bookName = []
let bookYear = []
let bookWriter = []
let bookLanguage = []

let choice = true
let contador = 0
let choice2
let choice3



while(choice){
    choice2 = prompt("1 /// Cadastrar Livro /// 2 Procurar Livros /// 3 Exibir Livros /// 4 Sair Da Biblioteca")

    if(choice2 == "1"){
        cadastro()
    }

    if(choice2 == "2"){
        choice3 = prompt("1 Procurar por Autor /// 2 Procurar por Ano /// 3 Procurar pelo Autor e Ano /// 4 Procurar por Nome e ver idiomas disponiveis")
        if(choice3 == "1"){
            ShowBooksByAutor()
        }

        if(choice3 == "2"){
            ShowBooksByYear()
        }

        if(choice3 == "3"){
            ShowBooksByAutorAndYear()
        }

        if(choice3 == "4"){
            ShowBooksByNameAndLanguage()
        }
    }

    if(choice2 == "3"){
        choice3 = prompt("1 Exibir livros por Idioma /// 2 Exibir livros ordenados por Ano")
        if(choice3 == "1"){
            ShowAllBooksByLanguage()
        }

        if(choice3 == "2"){
            OrderByYear()
        }
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

function ShowBooksByNameAndLanguage(){
    let times = 0
    let idiomas = []
    let nomeBook = prompt("Qual o nome do Livro ?")
    for(let for1 = 0; for1 < bookName.length; for1++){
        if(nomeBook == bookName[for1]){
            idiomas[for1] = bookLanguage[for1] 
        }

        else{
            times++
        }

    }

    if(times > 0){
        return alert("Você digitou um Nome inválido")
    }
    return alert(`Os idiomas do Livro ${nomeBook} São: ${idiomas}`)
}

function ShowAllBooksByLanguage(){
    let LivrosByIdioma = []
    let order = 0
    let idioma = prompt("Por qual idioma você quer filtrar ?")
    for(let for2 = 0; for2 < bookLanguage.length; for2++){
        if(idioma == bookLanguage[for2]){
            LivrosByIdioma[order] = bookName[for2]
            order++
        }
    }

    if(order == 0){
        return alert("Não possuem livros no idioma desejado")
    }
    return alert(`Os Livros listados no idioma ${idioma} são: ${LivrosByIdioma}`)
}

function OrderByYear(){ 
    let MaiorValor = 0
    let MaiorValor2
    for(var for3 = 0; for3 < bookName.length; for3++){
        for(var for4 = 0; for4 < bookName.length; for4++){
            if(bookYear[for4] > bookYear[for4 + 1]){
               MaiorValor = bookYear[for4]
               bookYear[for4] = bookYear[for4 + 1]
               bookYear[for4 + 1] = MaiorValor

                MaiorValor2 = bookName[for4]
                bookName[for4] = bookName[for4 + 1]
                bookName[for4 + 1] = MaiorValor2
            }
        }
    }
    return alert(`${bookName}  / ${bookYear}`)
}