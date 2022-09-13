

let bookName = []
let bookYear = []
let bookWriter = []
let bookLanguage = []

let choice = true
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
    bookName.push(prompt("Cadastre o nome do Livro"))
    bookYear.push(prompt("Cadastre o Ano do Livro"))
    bookWriter.push(prompt("Cadastre o Nome do Autor do Livro"))
    bookLanguage.push(prompt("Cadastre o Idioma do Livro"))
}

function ShowBooksByAutor(){
    let LivrosAutorX = []
    let autor = prompt("Qual o nome do Autor que você deseja ver os Livros ?")

    bookWriter.forEach(VerificateWriter)

    function VerificateWriter(item, index){
        if(item == autor){
            LivrosAutorX.push(bookName[index])
        }
    }
    
    return alert(`Os Livros do Autor ${autor}: ${LivrosAutorX}`)
}

function ShowBooksByYear(){
    let LivrosAnoX = []
    let ano = prompt("Qual o Ano que você deseja ver os Livros ?")

    bookYear.forEach(VerificateYear)

    function VerificateYear(item, index){
        if(item == ano){
            LivrosAnoX.push(bookName[index])
        }
    }

    return alert(`Os Livros do Ano ${ano}: ${LivrosAnoX}`)
}

function ShowBooksByAutorAndYear(){
    let ano2
    let LivrosAnoAutorX = []

    let autor2 = prompt("Qual o nome do Autor ?")

    let Verificate = bookWriter.indexOf(autor2)

    if(Verificate == false){
        ano2 = prompt("A Partir de qual Ano você quer ver os livros desse Autor ?")

        let VerificateYEar = bookYear.indexOf(ano2)

        if(VerificateYEar == null || VerificateYEar < 0){
            return alert(`O Autor ${autor2} não possui nenhum livro a partir desse Ano`)
        }

        else{
            bookYear.forEach(AddBooksByXYear)
        }
    }

    else{
        return alert("Você digitou um Autor inválido")
    }

    function AddBooksByXYear(item, index){
        if(item >= ano2){
            LivrosAnoAutorX.push(bookName[index])
        }
    }

    return alert(`Os Livros do Autor ${autor2} a partir do Ano ${ano2} são: ${LivrosAnoAutorX}`)
}

function ShowBooksByNameAndLanguage(){
    let idiomas = []
    let nomeBook = prompt("Qual o nome do Livro ?")

    let VerificateName = bookName.indexOf(nomeBook)

    if(VerificateName == null){
        return alert(`Não possuimos nenhum Livro ${nomeBook} em nenhum Idioma`)
    }

    else{
        bookName.forEach(AddBooksByXLanguage)
    }

    function AddBooksByXLanguage(item, index){
        if(item == nomeBook){
            idiomas.push(bookLanguage[index])
        }
    }

    return alert(`Os idiomas do Livro ${nomeBook} São: ${idiomas}`)
}

function ShowAllBooksByLanguage(){
    let LivrosByIdioma = []
    let idioma = prompt("Por qual idioma você quer filtrar ?")

    let VerificateLanguage = bookLanguage.indexOf(idioma)

    if(VerificateLanguage == null){
        return alert(`Não possuimos nenhum Livro com o Idioma: ${idioma}`)
    }

    else{
        bookLanguage.forEach(FilterBooksByLanguage)
    }

    function FilterBooksByLanguage(item, index){
        if(item == idioma){
            LivrosByIdioma.push(bookName[index])
        }
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