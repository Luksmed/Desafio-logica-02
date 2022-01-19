let idade = 31
if(idade > 18){
    console.log("Voce é maior de idade")
}

let condicaoHumana = true
if(idade > 18 && condicaoHumana == true){
    console.log("Voce atendeu os requisitos")
}

let MesDeAniversario = "Fevereiro"
if(MesDeAniversario == "janeiro" || MesDeAniversario == "dezembro"){
    console.log("Feliz Aniversário!")
}else{
    console.log("Você não faz aniversário em janeiro ou dezembro")
}

let nome = "Lucas"
if(nome.startsWith("R")){
    console.log("Seu nome tem R como primeira letra")
}else{
    console.log("Seu nome não se inicia com R")
}

let sobrenome = "Medeiros"
if(sobrenome.length > 6 || nome.startsWith("E")){
    console.log("Pelo menos uma das condições foi atendida")
}
