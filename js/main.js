function botao() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada</b>"

    // alert("Obrigada por clicar")
}

function redirecionar() {
    window.open("https://www.uol.com.br")
    window.location.href = "https://www.uol.com.br"
}

function trocar(elemento) {
    elemento.innerHTML = "Obrigada por passar o mouse"
    //console.log("Trocar Texto")
}

function voltar(elemento) {
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load() {
    alert("Pagina carregada")
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}

// function soma(n1, n2) {
//   return n1 + n2;
// }

// function validaIdade(idade) {
//   var validar;

//   if (idade >= 18) {
//     validar = true
//   }else {
//     validar = false;
//   }
//   return validar;
// }

// var idade = prompt("Qual a sua idade")
// alert(validaIdade(idade))

// alert(soma(5,10));

// let nome = "Fabiana Barreto"
// let idade = 40
// let idade2 = 20;
// var frase = "Japão é o melhor time do mundo"

// //alert(nome + ' tem ' + idade + " anos")
// //alert (idade + idade2)
// console.log(nome)
// console.log(idade + idade2)
// console.log(frase.replace("Japão", "Brasil"))
// alert(frase.replace("Japão", "Brasil"))

// var lista = ["maçã", "pêra", "laranja"]
// // lista.pop()
// lista.push("uva")

// console.log(lista.toString()[0])
// console.log(lista[1])
// console.log(lista.join("|"))

// var fruta = {nome: "maça", cor: "vermelha"}
// console.log(fruta.cor)

// var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
// console.log(frutas)
// console.log(frutas[1].nome)

// var idade = 18
// var idade = prompt("Qual a sua idade?")
// if(idade >= 18) {
//   console.log("maior de idade")
// } else {
//   console.log("menor de idade")
// }

// var count = 0
// while(count <= 5) {
//   console.log(count)
//   count++
// }
// var count;
// for (count = 0; count <= 5; count++) {
//   console.log(count);
// }

// var d = new Date();
// alert(d.getDay())
// alert(d.getHours())
// alert(d.getMinutes())